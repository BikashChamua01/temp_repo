// // File system
const fs = require("fs");
// fs.writeFileSync("./bikash.txt", "Hi my name is bikash chamua");
// fs.writeFileSync(
//   "./bikash.txt",
//   "You have to learn node js and express js i detail"
// ); // This will overwrite
// fs.appendFileSync("./bikash.txt", "You have to work hard and hard");

// const buf_data = fs.readFileSync("./bikash.txt");
// console.log(buf_data)
// console.log("The data read from the file is :"+buf_data);  //See the difference between these two outputs

// CRUD : Create Read Update Delete
// CHALLENGE TIME
// 1 create a folder named it bikash
// fs.mkdirSync('Bikash')

// 2 create a file in it named it bio.txt
// fs.writeFileSync('./Bikash/bio.txt',"Bikash chamua")

// 3 Add more data into the file at the end of the existing data
// fs.appendFileSync('./Bikash/bio.txt',"I am currrently studying in Assam Engineering College")

// // 4 Read the data without getting the buffer data
// const data = fs.readFileSync("./Bikash/bio.txt", "utf8");
// console.log(data);

// File encoding
// 5 Rename the file name to my bio.txt
// fs.renameSync("./Bikash/bio.txt", "./Bikash/MyBio.txt");
// First remove the files inside the folder 
fs.unlinkSync("./Bikash/MyBio.txt")
fs.rmdirSync("Bikash")
// Now delete both the file and folder

