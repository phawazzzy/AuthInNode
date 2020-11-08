const express = require("express");

// imported signup funcion form controllers/user,js
const { signup } = require("../controllers/user");

const router = express.Router();

router.post("/users/signup", signup);

module.exports = router;
