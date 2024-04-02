const os = require("os");

/****System architecture****/
console.log(os.arch());

/****Free Memory***/
freeMemory = os.freemem(); //It gives the answer in bytes
console.log(`Free memory is : ${freeMemory / 1024 / 1024 / 1024}`);

/****Host name *****/
host_name = os.hostname();
console.log(host_name);
console.log(`Platform : ${os.platform()}`);
console.log(`tmpdir  ${os.tmpdir()}`);
console.log(`Operating System  ${os.type()}`);
