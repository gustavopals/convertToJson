import { Request, Response } from "express";
import { readFile } from "xlsx";

export function convertSpreadsheetToJson(req: Request, res: Response) {
	const result = handleconvertSpreadsheetToJson(req.body.path);

	res.json(result);
}

function handleconvertSpreadsheetToJson(path: any) {
	const result = readFile(path);

	return result;
}
