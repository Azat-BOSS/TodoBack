import Todo from "../Schema/todoSchema.js";

class TodoController {
  async getPostsByUser(req, res) {
    try {
      const id = req.user

      const todos = await Todo.find({user: id})
      return res.json({todos, success: true });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  }
  async getPostsById(req, res) {
    try {
      const _id = req.params.id
      console.log(_id)
      const todo = await Todo.findById({_id: _id})
      return res.json(todo);
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }

  async createPost(req, res) {
    try {
      const { author, title, content } = req.body;
      const user = req.user
      const todo = await Todo.create({ author, title, content, user });
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
      const _id  = req.params.id;
      const checkBox = req.body;
      const todo = await Todo.findByIdAndUpdate({_id: _id}, checkBox, { new: true });
      return res.json({todo, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }

  async changeTodo(req, res) {
    try {
      const _id  = req.params.id;
      const dataTodo = req.body;
      const todo = await Todo.findByIdAndUpdate({_id: _id}, dataTodo, { new: true });
      return res.json({todo, success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }
}

export default new TodoController();
