const express = require("express");
const { signup } = require("../controllers/user");

const router = express.Router();

router.post("/users/signup", signup);

module.exports = router;
