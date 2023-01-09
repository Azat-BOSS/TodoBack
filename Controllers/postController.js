import Post from "../Schema/postSchema.js"

class PostController {
  async getPosts(req, res) {
    try {
      const post = await Post.find()
      return res.json(post)
    } catch (error) {
      res.status(500).json({message: "can't get any posts"})
    }
  }
  async createPost(req, res) {
    try {
      const { author, title, content } = req.body
      const post = await Post.create({ author, title, content })
      return res.json(post)
    } catch (error) {
      res.status(500).json({message: "can't create any posts"})
    }
  }
  async deletePost(req, res) {
    try {
      const { id } = req.params
      const post = await Post.findByIdAndDelete(id)
      return res.json(post)
    } catch (error) {
      res.status(500).json({message: "can't delete any posts"})
    }
  }
  async changeCheck(req, res) {
    try {
      const { id } = req.params
      const checkBox = req.body
      const post = await Post.findByIdAndUpdate(id, checkBox ,{new: true})
      return res.json(post)
    } catch (error) {
      res.status(500).json({message: "can't delete any posts"})
    }
  }
}

export default new PostController()