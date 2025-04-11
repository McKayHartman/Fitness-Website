import jwt from "jsonwebtoken";
import "dotenv/config";

// creates a token that will not expire. We should change this later.
export function generateToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET);
}

// middleware function to authenticate a token
export function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}
