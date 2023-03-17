import { Request, Response } from "express";
import * as XLSX from "xlsx";

export function convertExcelToJson(req: Request, res: Response) {
	const filename =
		"src/utils/files/09_Assembly Daily Production Schedule 03_MAR_2023.xlsm";

	const result = handleConvertExcelToJson(filename);

	res.json(result);
}

function handleConvertExcelToJson(filename) {
	const workbook = XLSX.readFile(filename);
	return workbook;

	/* // Obter a primeira planilha do workbook
	const sheet = workbook.Sheets[workbook.SheetNames[0]];

	// return sheet;

	// Converter a planilha em um array de objetos JSON usando o método XLSX.utils.sheet_to_json()
	const data = XLSX.utils.sheet_to_json<ExcelData>(sheet);

	// Retornar o array de dados
	return data; */
}
