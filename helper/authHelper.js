const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// hashpassword using the bcrypt package
const hashPassword = (plainPassword) => {
  // checks if there is password provided
  if (!plainPassword) {
    throw new Error("Error hashing password");
  }

  // salt round which bcrypt will use
  const salt = bcrypt.genSaltSync(10);

  // return the generated hashed string
  return bcrypt.hashSync(plainPassword, salt);
};

// function to generate a token

const tokengen = (payload) => jwt.sign(payload, "jwtsecret", { expiresIn: "6h" });

// export the hashPassword function
module.exports = {
  hashPassword, tokengen
};
