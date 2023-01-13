import Todo from "../Schema/todoSchema.js";

class TodoController {
  async getPosts(req, res) {
    try {
      const todos = await Todo.find();
      return res.json({todos, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }
  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const todo = await Todo.findById(id);
      return res.json({todo, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }

  async createPost(req, res) {
    try {
      const { author, title, content } = req.body;
      const todo = await Todo.create({ author, title, content });
      return res.json({todo, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndDelete(id);
      return res.json({todo, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }

  async changeCheck(req, res) {
    try {
      const { id } = req.params;
      const checkBox = req.body;
      const todo = await Todo.findByIdAndUpdate(id, checkBox, { new: true });
      return res.json({todo, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }

  async changeTodo(req, res) {
    try {
      const { id } = req.params;
      const dataTodo = req.body;
      const todo = await Todo.findByIdAndUpdate(id, dataTodo, { new: true });
      return res.json({todo, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }
}

export default new TodoController();
