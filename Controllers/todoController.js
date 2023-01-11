import Todo from "../Schema/todoSchema.js"

class TodoController {
  async getPosts(req, res) {
    try {
      const todo = await Todo.find()
      return res.json(todo)
    } catch (error) {
      res.status(500).json({message: "can't get any todos"})
    }
  }
  async getPostById(req, res) {
    try {
      const { id } = req.params
      const todo = await Todo.findById(id)
      return res.json(todo)
    } catch (error) {
      res.status(500).json({message: "can't get todo by id"})
    }
  }

  async createPost(req, res) {
    try {
      const { author, title, content } = req.body
      const todo = await Todo.create({ author, title, content })
      return res.json(todo)
    } catch (error) {
      res.status(500).json({message: "can't create any todos"})
    }
  }
  async deletePost(req, res) {
    try {
      const { id } = req.params
      const todo = await Todo.findByIdAndDelete(id)
      return res.json(todo)
    } catch (error) {
      res.status(500).json({message: "can't delete any todos"})
    }
  }
  async changeCheck(req, res) {
    try {
      const { id } = req.params
      const checkBox = req.body
      const todo = await Todo.findByIdAndUpdate(id, checkBox, {new: true})
      return res.json(todo)
    } catch (error) {
      res.status(500).json({message: "can't delete any todos"})
    }
  }
  async changeTodo(req, res) {
    try {
      const { id } = req.params
      const dataTodo = req.body
      const todo = await Todo.findByIdAndUpdate(id, dataTodo, {new: true})
      return res.json(todo)
    } catch (error) {
      res.status(500).json({message: "can't delete any todos"})
    }
  }
}

export default new TodoController()