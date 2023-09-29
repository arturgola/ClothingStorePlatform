const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// Register a new user
router.post("/register", registerUser);

// Log in a user
router.post("/login", loginUser);

// Get user data
router.get("/getMe", protect, getMe);

//Update User
router.put("/updateUser",protect,updateUser);

//Delete USer
router.delete("/delete",protect, deleteUser)

module.exports = router;
