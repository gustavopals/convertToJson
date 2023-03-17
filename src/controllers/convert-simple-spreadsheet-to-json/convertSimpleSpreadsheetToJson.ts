import { Request, Response } from "express";
import { readFile, utils } from "xlsx";

export function convertSimpleSpreadsheetToJson(req: Request, res: Response) {
	const result = handleconvertSimpleSpreadsheetToJson(req.body.path);

	res.json(result);
}

function handleconvertSimpleSpreadsheetToJson(path: string) {
	let workbook = readFile(path);

	let result: any = {};

	result["SheetNames"] = workbook.SheetNames;

	workbook.SheetNames.forEach((sheetName) => {
		const sheet = workbook.Sheets[sheetName];

		result[sheetName] = utils.sheet_to_json(sheet);
	});

	return result;
}
