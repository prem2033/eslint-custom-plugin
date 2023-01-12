const { deprecatedMethod } = require("./deprecatedMethodRule");
const { methodConatinNumber } = require("./methodConatinNumberRule");
module.exports = {
  rules: {
    "method-deprecated": {
      create: deprecatedMethod,
    },
    "method-conatain-integer": {
      create: methodConatinNumber,
    }
  },
};
