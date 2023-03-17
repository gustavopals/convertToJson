import express from "express";
import bodyParser from "body-parser";
import { Router, Request, Response } from "express";

import { helloWorld } from "./controllers/hello/hello-world";
import { convertBase64SpreadsheetToJson } from "./controllers/convert-base64-spreadsheet-to-json/convertBase64SpreadsheetToJson";
import { convertSpreadsheetToJson } from "./controllers/convert-spreadsheet-to-json/convertSpreadsheetToJson";

const app = express();
const route = Router();

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ extended: true }));

route.get("/", (req: Request, res: Response) => helloWorld(req, res));

route.post("/convertBase64SpreadsheetToJson", (req: Request, res: Response) =>
	convertBase64SpreadsheetToJson(req, res)
);

route.post("/convertSpreadsheetToJson", (req: Request, res: Response) =>
	convertSpreadsheetToJson(req, res)
);

app.use(route);
app.listen(8030, () =>
	console.log("Http server is running on port http://localhost:8030")
);
