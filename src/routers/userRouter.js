import express from "express";
import {
  protectMiddleware,
  publicOnlyMiddleware,
  upleadFiles,
} from "../middlewares";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
const userRouter = express.Router();
//get.post 어떤 http method 를 사용하든지 이 middleware 를 사용하겠다는 뜻.
userRouter.get("/logout", protectMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectMiddleware)
  .get(getEdit)
  .post(upleadFiles.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);
export default userRouter;
