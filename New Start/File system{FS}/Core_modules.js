// *************File system**************
const fs = require("fs");
// fs.writeFileSync("read.txt", "Hi bikash go go go!");

// fs.writeFileSync("read.txt", "Be ready for the placement!");

// fs.appendFileSync("read.txt", "Hi this is appending content");

// Node js has additional datatype called buffer
// const buf_data = fs.readFileSync("read.txt",'utf8');
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
/* <Buffer 42 65 20 72 65 61 64 79 20 66 6f 72 20 74 68 65 20 70 6c 61 63 65 6d 65 6e 74 21 48 69 20 74 68 69 73 20 69 73 20 61 70 70 65 6e 64 69 6e 67 20 63 6f ... 5 more bytes> */
org_data = buf_data.toString();
console.log(org_data);

// *******To rename the file
// fs.renameSync( "readwrite.txt","read.txt");
