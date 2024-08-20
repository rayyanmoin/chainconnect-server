const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { getAllUsers, getUserById, deleteUserById, updateUserById, getUser, createUser } = require("../controllers/userController");

// Get all users
router.get("/", getAllUsers);

// Get a single user
router.get("/:id", getUser, getUserById);

// Create a new user
router.post("/", createUser);

// Update a user
router.put("/:id", getUser, updateUserById);

// Delete a user
router.delete("/:id", getUser, deleteUserById);

module.exports = router;
