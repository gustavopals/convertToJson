import { Request, Response } from "express";
import { readFile } from "xlsx";
import { writeFileSync, unlinkSync } from "fs";
import { v4 as uuidv4 } from "uuid";

export function convertExcelToJson(req: Request, res: Response) {
	const result = handleConvertExcelToJson(req.body.base64);

	res.json(result);
}

function handleConvertExcelToJson(base64: any) {
	const buffer = Buffer.from(base64, "base64");

	const base64FilePath = `src/utils/temp/${uuidv4()}.xlsm`;

	writeFileSync(base64FilePath, buffer);

	const result = readFile(base64FilePath);

	unlinkSync(base64FilePath);

	return result;
}
