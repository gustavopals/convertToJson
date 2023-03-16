import express from "express";
import { Router, Request, Response } from "express";
import { importXlsm } from "./importExcel";

const app = express();
const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
	const result = importXlsm(
		"src/files/09_Assembly Daily Production Schedule 03_MAR_2023.xlsm"
	);

	res.json(result);
});

app.use(route);
app.listen(3333, () => "server running");
