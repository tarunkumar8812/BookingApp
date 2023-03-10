const express = require('express');
const { UpdateUser, deleteUser,
    getUser, getAllUsers } = require('../controllers/userController');
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');
const router = express.Router()

// PUT
router.put("/:id", verifyUser, UpdateUser)

// DELETE
router.delete("/:id", verifyUser, deleteUser)

// GET single User by id
router.get("/:id", verifyUser, getUser)

// GET All Users
router.get("/", verifyAdmin, getAllUsers)

module.exports = router
