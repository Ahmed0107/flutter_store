const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/sign-in", userController.signIn);

router.post("/add-user", userController.addUser);

module.exports = router;
