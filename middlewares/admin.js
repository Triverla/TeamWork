module.exports = (req, res, next) => {
    if (req.user.isAdmin === false) {
      return res.status(403).send('Action Not Authorized');
    }
    next();
  };
  