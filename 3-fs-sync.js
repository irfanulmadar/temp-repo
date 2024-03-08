const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/3first.txt", "utf8");
const second = readFileSync("./content/3second.txt", "utf8");

console.log(first, "then", second);

writeFileSync(
  "./content/3write.txt",
  `Here is the result: ${first} & ${second}\n`,
  { flag: "a" } // Do not over-write start a new text from very last index
);

console.log("Done with the task");
console.log("Starting the next one");
