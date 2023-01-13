import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./Router/routerPosts.js";
import authRouter from "./Router/authRouter.js";

const app = express();
const PORT = process.env.PORT || 3001;

const DB_URL = `mongodb+srv://Azat:Azat2006@cluster0.wjqcnmw.mongodb.net/?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use("/auth", authRouter);

const startApp = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URL);
    await app.listen(PORT, () => console.log(`server is working on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
