import express from "express";
import { Router, Request, Response } from "express";
import { convertExcelToJson } from "./controllers/convert-excel-to-json/convertExcelToJson";
import { helloWorld } from "./controllers/hello/hello-world";

const app = express();
const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => helloWorld(req, res));

route.post("/convertExcelToJson", (req: Request, res: Response) =>
	convertExcelToJson(req, res)
);

app.use(route);
app.listen(8030, () => console.log("Http server is running on port 8030"));
