import express from "express";

import {
  getEdit,
  watch,
  postEdit,
  getUproad,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";
import { protectMiddleware } from "../middlewares";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUproad).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectMiddleware)
  .get(deleteVideo);

export default videoRouter;
