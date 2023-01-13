import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthModel",
    required: true
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", Todo);
