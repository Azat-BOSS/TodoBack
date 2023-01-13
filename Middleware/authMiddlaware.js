import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddlaware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.json({ success: false, message: "user doesn't auth", success: false });
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: "user doesn't auth", success: false });
  }
};
