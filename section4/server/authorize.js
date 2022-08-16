const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "vinay") {
    req.user = { name: "vinay", id: 1 };
  } else {
    res.status(401).send(`Un-Authorized User`);
  }
  next();
};

module.exports = authorize;