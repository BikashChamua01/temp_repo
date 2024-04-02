// ***********Asynchronous Filesystem************
// Call back is must in async function
const fs = require("fs");

// fs.writeFile("read.txt", "Hi this is async file", (err) => {
//   console.log("File is created");
//   console.log(err);
// });

// fs.readFile("read.txt", "UTF-8", (err, data) => {
//   console.log(data);
// });

fs.readFile("read.txt", (_err, data) => {
  console.log(data.toString());
});
console.log("Finish..");
