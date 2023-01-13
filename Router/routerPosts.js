import { Router } from "express";
import { authMiddlaware } from "../Middleware/authMiddlaware.js";
import TodoController from "../Controllers/todoController.js";

const router = Router();

router.get("/todos", authMiddlaware, TodoController.getPostsByUser);
router.get("/todos/:id", authMiddlaware, TodoController.getPostsById);
router.post("/todos", authMiddlaware, TodoController.createPost);
router.delete("/todos/:id", authMiddlaware, TodoController.deletePost);
router.patch("/todos/:id", authMiddlaware, TodoController.changeCheck);
router.patch("/todos/todo/:id", authMiddlaware, TodoController.changeTodo);

export default router;
