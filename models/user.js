// import the module mongoose
const mongoose = require("mongoose");

// use the Schema method in the mongoose package
const { Schema } = mongoose;

// we define the Schema
// this is how we want the user collection(table) to look like
const userSchema = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

// export the user module so that we can use it in other files
module.exports = mongoose.model("user", userSchema);
