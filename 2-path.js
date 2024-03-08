const path = require("path");

console.log(path.sep); // separator   "/"

const filePath = path.join("/content", "2-path", "text.txt");
console.log(filePath); // directory

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "2-path", "text.txt"); // full directory

console.log(absolute);
