# convertToJson

Microservice developed with the objective of facilitating and speeding up file conversions to JSON.

### Functionalities Implemented

-   Convert Sheets to JSON

```
POST
/convertSpreadsheetToJson
```

Enter a path where the microservice can access your file and the routine will return the worksheet in JSON format

body:

```json
{
	"path": "//path/to/the/file"
}
```

-   Convert Spreadsheets in Base64 type to JSON

```
POST
/convertBase64SpreadsheetToJson
```

Inform a base64 of a worksheet and the routine will return the worksheet in JSON format

body:

```json
{
	"base64": "spreadsheetbase64"
}
```

## Getting Started

These instructions will provide you with a base project running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project to a production environment.

### Prerequisites

-   NodeJS

### Installing

Clone the project on your machine

Via terminal, install dependency packages

```
npm i
```

start the project

```
npm run dev
```

## Running the tests

Under development...

## Deployment

Clone the project

Via terminal, install dependency packages

```
npm i
```

Compile the project

```
npm run build
```

Start

```
npm start
```

## Built With

-   [typescript](https://www.typescriptlang.org/)
-   [expressJS](https://expressjs.com/pt-br/)
-   [xlsx](https://www.npmjs.com/package/xlsx)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

-   **Gustavo Pals** - _Initial work_ - [gustavopals](https://github.com/gustavopals)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
