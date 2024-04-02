// const http = require("http");

/***1st way to write***/
// http
//   .createServer((req, response) => {
//     response.write("<h1>Hello this is Bikash Chamua </h1>");
//     response.end();
//   })
//   .listen(4500);

/***2nd way to define the function seperately***/
// const dataControl = (req, response) => {
//   response.write("<h1>Hello this is Bikash.This is the 2nd way </h1>");
//   response.end();
// };

// http.createServer(dataControl).listen(4500)
