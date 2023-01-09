import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model("Post", Post)