// 1npm init in terminal
// From this you can create the package.json

// 2chalk package download :- colorful termnal
// node modules will be created package-lock,json file will be created that contains more informations about the installed packages

/*****Use of chalk module***/
// import chalk from "chalk"; //This works if the extension is mjs which stands for ECMA script module
// console.log(chalk.bgBlue("Hello World"));

// Use color module
require("colors");

console.log("success".bgGreen);
console.log("Fail".bgRed);

// Importing module
// Note that the --experimental-modules flag is required to enable support for ES modules in Node.js.
// Import the `chalk` module
// import chalk from "chalk";
const chalk = require("chalk");

// Print a message using `chalk`
console.log(chalk.blue("Hello, world!"));
