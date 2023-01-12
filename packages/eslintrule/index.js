const { deprecatedMethod } = require("./deprecatedMethodRule");
const { methodConatinNumber } = require("./methodConatinNumberRule");
const { vaildVaribles } = require("./vaildVariblesRule");

module.exports = {
  rules: {
    "method-deprecated": {
      create: deprecatedMethod,
    },
    "method-conatain-integer": {
      create: methodConatinNumber,
    },
    "vaild-varibales": {
      create: vaildVaribles,
    }
  },
};
