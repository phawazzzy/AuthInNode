exports.signup = (req, res) => {
  console.log("this is the signup route");
  return res.status(200).json({ message: "login successful" });
};
