const path = require("path");

console.log(
  "Directory Name : " +
    path.dirname("D:/Web Development/Node Js/OS/Path-Module/path.js")
);

console.log(
  "Extension Name : " +
    path.extname("D:/Web Development/Node Js/OS/Path-Module/path.js")
);

console.log(
  "File Name : " +
    path.basename("D:/Web Development/Node Js/OS/Path-Module/path.js")
);

console.log(path.parse("D:/Web Development/Node Js/OS/Path-Module/path.js"));
