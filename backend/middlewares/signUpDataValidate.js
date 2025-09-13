const signupMiddleware = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (  !name  || !email || !password) {
      res.status(400).json({msg:"All fields are required"})
    } else {
      req.user = { name, email, password };
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = signupMiddleware;
