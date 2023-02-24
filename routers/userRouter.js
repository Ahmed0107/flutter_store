const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/get-all", userController.getUsers);

router.get("/find-user/:email", userController.findUserByEmail);

router.post('/add-user', userController.addUser)

module.exports = router;
