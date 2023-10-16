const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../models/userModel');
const { protect } = require('../middleware/authMiddleware'); // Import the protect middleware
const { loginUser } = require('../controllers/userController');

const api = supertest(app);

describe('User Controller Tests', () => {
  let authToken;

  beforeEach(async () => {
    //Clear the database and register a user for testing
    await User.deleteMany({});
    const response = await api.post('/api/users/register').send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'testpassword',
    });
    authToken = response.body.token;
    //console.log(response.headers);
    //console.log(authToken);
  });

  describe('POST /api/users/register', () => {
    test('should register a new user', async () => {
      const response = await api
        .post('/api/users/register')
        .send({
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'securepassword',
        })
        .expect(201);
      expect(response.body).toHaveProperty('token');
    });

    test('should return 400 if required fields are missing', async () => {
      await api
        .post('/api/users/register')
        .send({
          name: 'Invalid User',
          // Missing email and password
        })
        .expect(400);
    });

    test('should return 404 if email already exists', async () => {
      await api
        .post('/api/users/register')
        .send({
          name: 'Duplicate User',
          email: 'test@example.com', // Email that already exists
          password: 'password123',
        })
        .expect(404);
    });
  });

  describe('POST /api/users/login', () => {
    test('should login an existing user', async () => {
      await api
        .post('/api/users/login')
        .send({
          email: 'test@example.com',
          password: 'testpassword',
        })
        .expect(200);
    });

    test('should return 404 if email is not found', async () => {
      await api
        .post('/api/users/login')
        .send({
          email: 'nonexistent@example.com',
          password: 'password123',
        })
        .expect(404);
    });

    test('should return 401 if password is incorrect', async () => {
      await api
        .post('/api/users/login')
        .send({
          email: 'test@example.com',
          password: 'incorrectpassword',
        })
        .expect(401);
    });
  });

  describe('GET /api/users/getMe', () => {
    test('should get user data if authenticated', async () => {
      //   const user = await User.findOne({ email: 'test@example.com' });
      //   const authToken = jwt.sign({ id: user._id }, process.env.SECRETKEY);

      const response = await api
        .get('/api/users/getme')
        // .set('Authorization', `Bearer ${authToken}`)
        .set('Cookie', `Authorization=${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('name', 'Test User');
    });

    test('should return 401 if not authenticated', async () => {
      await api.get('/api/users/getMe').expect(401);
    });
  });

  describe('PUT /api/users/updateUser', () => {
    test('should update user data if authenticated', async () => {
      const updatedData = {
        name: 'Updated User',
        email: 'updated@example.com',
        password: 'updatedpassword',
      };
      const response = await api
        .put('/api/users/updateUser')
        //   .set('Authorization', `Bearer ${authToken}`)
        .set('Cookie', `Authorization=${authToken}`)
        .send(updatedData)
        .expect(200);
      expect(response.body).toHaveProperty('name', 'Updated User');
      expect(response.body).toHaveProperty('email', 'updated@example.com');
    });

    test('should return 401 if not authenticated', async () => {
      await api
        .put('/api/users/updateUser')
        .send({
          name: 'Updated User',
          email: 'updated@example.com',
          password: 'updatedpassword',
        })
        .expect(401);
    });
  });

  describe('DELETE /api/users/delete', () => {
    test('should delete user if authenticated', async () => {
      await api
        .delete('/api/users/delete')
        // .set('Authorization', `Bearer ${authToken}`)
        .set('Cookie', `Authorization=${authToken}`)
        .expect(200);
      const users = await User.find({});
      expect(users.length).toBe(0);
    });

    test('should return 401 if not authenticated', async () => {
      await api.delete('/api/users/delete').expect(401);
    });
  });
});

afterAll(async () => {
  // Clean up and close the database connection
  await mongoose.connection.close();
});
