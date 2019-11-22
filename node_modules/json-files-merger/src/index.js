const fs = require('fs');
const jsonOperator = require('jsonfile');

const jsonTemp = {};

const load = (locale = 'de') => {
  const targetFolder = `./${locale}`;
  fs.readdirSync(targetFolder).forEach((fileName) => {
    const filePath = `${targetFolder}/${fileName}`;

    if (filePath.match('.json$', 'i')) {
      const obj = jsonOperator.readFileSync(filePath);
      const transKeys = Object.keys(obj);
      if (transKeys.length === 0) {
        throw new Error(`${filePath} has NO content!`);
      }

      transKeys.forEach((key) => {
        if (!obj[key]) {
          throw new Error(
            `${filePath} => KEY: ${key} has no translation defined!`
          );
        }

        if (jsonTemp[key]) {
          throw new Error(`${filePath} => KEY: ${key} is duplicated!`);
        }

        jsonTemp[key] = obj[key];
      });
    } else {
      throw new Error(`${filePath} is not a JSON File!`);
    }
  });

  return jsonTemp;
};

module.exports = { load };
