import mongoose from "mongoose";

const AuthModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    requied: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("AuthModel", AuthModel);
