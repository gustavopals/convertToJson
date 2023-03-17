import express from "express";
import bodyParser from "body-parser";
import { Router, Request, Response } from "express";
import { convertExcelToJson } from "./controllers/convert-excel-to-json/convertExcelToJson";
import { helloWorld } from "./controllers/hello/hello-world";

const app = express();
const route = Router();

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ extended: true }));

route.get("/", (req: Request, res: Response) => helloWorld(req, res));

route.post("/convertExcelToJson", (req: Request, res: Response) =>
	convertExcelToJson(req, res)
);

app.use(route);
app.listen(8030, () => console.log("Http server is running on port http://localhost:8030"));
