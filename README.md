# Json File Merger

## How to Start

clone the project, then

```
git clone https://github.com/vikbert/json-files-merger-demo.git
cd json-files-merger-demo
npm install
npm start
```

## Use Case: merge json translation files

load all json files located in `/de` and merge the data to a single json object.

```
const merger = require("json-files-merger");

const targetFolder = "de";
const mergedMessages = merger.load(targetFolder);

console.log("\nMerged JSON messages: \n=====================");
console.log(mergedMessages);

```
