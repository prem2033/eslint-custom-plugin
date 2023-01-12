const { deprecatedMethod } = require("./deprecatedMethodRule");

module.exports = {
  rules: {
    "method-deprecated": {
      create: deprecatedMethod,
    },
  },
};
