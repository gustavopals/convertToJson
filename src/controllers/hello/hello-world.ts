import { Request, Response } from "express";

export function helloWorld(req: Request, res: Response): void {
	const result = handleHelloWorld();
	res.json(result);
}

function handleHelloWorld() {
	const result =
		"Hello, this is the microservice developed for data conversion";

	return result;
}
