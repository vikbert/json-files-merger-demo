const merger = require("json-files-merger");

const targetFolder = "de";
const mergedMessages = merger.load(targetFolder);

console.log("\nMerged JSON messages: \n=====================");
console.log(mergedMessages);
