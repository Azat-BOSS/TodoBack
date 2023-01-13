import { Router } from "express";
import AuthUser from "../Controllers/authController.js";

const authRouter = Router();

authRouter.get("/users", AuthUser.getAllUsers);
authRouter.post("/registration", AuthUser.regUser);
authRouter.post("/login", AuthUser.logUser);

export default authRouter;
