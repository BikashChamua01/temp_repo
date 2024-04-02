const fs = require("fs");

// ***************While we are handling file system usign Async then we hve use the callback function. The function of callback is to define what to do after the completion of the file task*************//
// fs.writeFile("read.txt", "Learning Node.js in a good speed", (error) => {
//   if (error) console.log(error);
//   else console.log("File created ");
// });

//************ Reading the file / If the encoding utf8 is not written then the buffer data is shown only************
// fs.readFile("read.txt", "utf8", (error, data) => {
//   if (error) console.log(error);
//   else console.log(data);
// });

/*************Asynchronous is Better than sync**************/
/***using sync***/
// const syncData = fs.readFileSync("read.txt", "utf8");
// console.log(syncData);
// console.log("Execution part after the data"); //This part will not be executed until the data is read fro the file

/***Using Async***/
const asyncData = fs.readFile("read.txt", "utf8", (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
// console.log(asyncData)  This will show undefined data is accesed inside the call back function 
console.log("Execution part after the data"); //Here this part will not wait for the previous code to execute completely, Rather both will execute simultaneously
