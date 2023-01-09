import { Router } from "express";
import PostController from "../Controllers/postController.js";

const router = Router()

router.get("/posts", PostController.getPosts)
router.post("/posts", PostController.createPost)
router.delete("/posts/:id", PostController.deletePost)
router.patch("/posts/:id", PostController.changeCheck)

export default router