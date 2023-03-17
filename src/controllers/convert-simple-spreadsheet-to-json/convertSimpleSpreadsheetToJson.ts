import { Request, Response } from "express";
import { readFile, utils } from "xlsx";

export function convertSimpleSpreadsheetToJson(req: Request, res: Response) {
	const result = handleconvertSimpleSpreadsheetToJson(req.body.path);

	res.json(result);
}

function handleconvertSimpleSpreadsheetToJson(path: string) {
	let workbook = readFile(path);

	// Obter a primeira planilha do workbook
	const sheet = workbook.Sheets[workbook.SheetNames[0]];

	// return sheet;

	// Converter a planilha em um array de objetos JSON usando o método XLSX.utils.sheet_to_json()
	const data = utils.sheet_to_json(sheet);

	// Retornar o array de dados
	return data;
}
