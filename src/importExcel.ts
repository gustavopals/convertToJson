// Importar o módulo js-xlsx
import * as XLSX from "xlsx";

// Definir o tipo de retorno da função
interface ExcelData {
	teste: string;
	// Coloque aqui os campos que você quer extrair do arquivo xlsm
}

// Definir a função que recebe o nome do arquivo como argumento e retorna um array de objetos ExcelData
export function importXlsm(filename: string) {
	// Ler o arquivo xlsm usando o método XLSX.readFile()
	const workbook = XLSX.readFile(filename);

	// console.log(workbook);

	return workbook;

	// Obter a primeira planilha do workbook
	const sheet = workbook.Sheets[workbook.SheetNames[0]];

	// return sheet;

	// Converter a planilha em um array de objetos JSON usando o método XLSX.utils.sheet_to_json()
	const data = XLSX.utils.sheet_to_json<ExcelData>(sheet);

	// Retornar o array de dados
	return data;
}
