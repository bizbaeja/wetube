import express from "express";
import { protectMiddleware, publicOnlyMiddleware } from "../middlewares";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";
const userRouter = express.Router();
//get.post 어떤 http method 를 사용하든지 이 middleware 를 사용하겠다는 뜻.
userRouter.get("/logout", protectMiddleware, logout);
userRouter.route("/edit").all(protectMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);
export default userRouter;
