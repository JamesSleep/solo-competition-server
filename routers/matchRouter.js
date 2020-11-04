import express from "express";
import routes from "../routes";
import { home, matchDetail, matches, upload } from "../controllers/matchController";

const matchRouter = express.Router();

matchRouter.get(routes.home, home);
matchRouter.get(routes.matches, matches);
matchRouter.get(routes.matchDetail(), matchDetail);
matchRouter.post(routes.upload, upload);

export default matchRouter;