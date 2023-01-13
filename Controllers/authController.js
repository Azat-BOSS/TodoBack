import AuthModel from "../Schema/authShema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
};

class AuthUser {
  async getAllUsers(req, res) {
    try {
      const users = await AuthModel.find();
      return res.json(users);
    } catch (error) {
      res.status(403).json({ success: false });
    }
  }

  async regUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const username = await AuthModel.findOne({ name });
      if (username) {
        return res.status(500).json({ success: false });
      }
      const hashPassword = await bcrypt.hashSync(password, 4);
      const createUser = await AuthModel.create({
        name,
        email,
        password: hashPassword,
      });
      return res.json({createUser, success: true });
    } catch (error) {
      res.status(403).json({ success: false });
    }
  }

  async logUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await AuthModel.findOne({ email });
      if (!user) {
        return res.status(403).json({ success: false });
      }
      const hashPassword = await bcrypt.compareSync(password, user.password);
      if (!hashPassword) {
        return res.status(400).json({ success: false });
      }
      const token = await createToken(user._id);
      return res.json({ token, success: true });
    } catch (error) {
      res.status(403).json({ success: false });
    }
  }
}

export default new AuthUser();
