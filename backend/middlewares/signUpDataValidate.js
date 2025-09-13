const signupMiddleware = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (  !username  || !email || !password) {
      res.status(400).json({msg:"All fields are required"})
    } else {
      req.user = { username, email, password };
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = signupMiddleware;
