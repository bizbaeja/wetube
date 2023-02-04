import express from "express";

import {
  getEdit,
  watch,
  postEdit,
  getUproad,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUproad).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);

export default videoRouter;
