import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import matchRouter from "./routers/matchRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes.home, matchRouter);
//app.use(routes.matches, matchRouter);

export default app;