const { hashPassword, tokengen } = require("../helper/authHelper");
const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    // get the payload
    const { email, password, role } = req.body;

    //   check if payload is available
    if (!email || !password || !role) {
      return res.status(400).json({ message: "One or more of the payload is missing" });
    }

    //   check if a user with this email exist
    const existingUser = await User.findOne({ email });

    //   if user exists return the message
    if (existingUser) {
      return res.status(400).json({ message: "email not available" });
    }

    // hash password
    const hashpassword = await hashPassword(password);

    // generate token
    const token = await tokengen({ email });

    //    save user details in the database
    const createUser = await User.create({
      email, password: hashpassword, role
    });

    if (createUser) {
      return res.status(200).json({ message: "login successful", user: createUser, token });
    }
  } catch (error) {
    return res.status(500).json({ error: `error ${error} occured` });
  }
};
