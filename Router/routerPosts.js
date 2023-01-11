import { Router } from "express";
import TodoController from "../Controllers/todoController.js";

const router = Router()

router.get("/todos", TodoController.getPosts)
router.get("/todos/:id", TodoController.getPostById)
router.post("/todos", TodoController.createPost)
router.delete("/todos/:id", TodoController.deletePost)
router.patch("/todos/:id", TodoController.changeCheck)
router.patch("/todos/todo/:id", TodoController.changeTodo)

export default router