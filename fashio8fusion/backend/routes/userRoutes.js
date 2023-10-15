const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
  res.send('Hello, Express!');
});

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUserRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - name
 *         - email
 *         - password
 *       example:
 *         name: Bob
 *         email: bob@gmail.com
 *         password: 4wa95#Cf-
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginUserRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - email
 *         - password
 *       example:
 *         email: bob@gmail.com
 *         password: 4wa95#Cf-
 */

/**
 * @swagger
 * tags:
 *   - name: "User"
 *     description: "Endpoints related to user management"
 */

// Register a new user
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Signup User
 *     operationId: SignupUser
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: User signup data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: john_doe
 *               email: john@example.com
 *               password: 4wa95#Cf-
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid user data
 */
router.post('/register', registerUser);

// Log in a user
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login User
 *     operationId: LoginUser
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: User login data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: susan@gmail.com
 *               password: 4wa95#Cf-
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid user credentials
 */
router.post('/login', loginUser);

// Get user data
/**
 * @swagger
 * /users/getme:
 *   get:
 *     summary: Get User Information
 *     operationId: GetUser
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *       400:
 *         description: Invalid user credentials
 */
router.get('/getMe', protect, getMe);

//Update user data
/**
 * @swagger
 * /users/updateuser:
 *   put:
 *     summary: Update User Information
 *     operationId: UpdateUser
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: User updated data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: susan@gmail.com
 *               password: 4wa95#Cf-
 *     responses:
 *       200:
 *         description: User information updated successfully
 *       400:
 *         description: Invalid user credentials
 */
router.put('/updateUser', protect, updateUser);

//Delete User
/**
 * @swagger
 * /users/delete:
 *   delete:
 *     summary: Delete User
 *     operationId: DeleteUser
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Invalid user credentials
 */
router.delete('/delete', protect, deleteUser);

module.exports = router;
