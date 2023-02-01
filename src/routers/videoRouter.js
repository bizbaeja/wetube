import express from "express";

import {
  getEdit,
  watch,
  postEdit,
  getUproad,
  postUpload,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route(".upload").get(getUproad).post(postUpload);

export default videoRouter;
