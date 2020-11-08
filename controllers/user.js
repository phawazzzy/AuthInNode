exports.signup = (req, res) => {
  const { email, password, role } = req.body;
  console.log(email, password, role);
  if (!email || !password || role) {
    return res.status(400).json({ message: "One or more of the payload is missing" });
  }
  return res.status(200).json({ message: "login successful" });
};
