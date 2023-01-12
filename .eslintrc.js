module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: ["eslint:recommended"],
  plugins: ["my-lint"],
  rules: {
    "no-undef": "off",
    "no-console": "off",
    "my-lint/method-deprecated": "warn",
    "my-lint/method-conatain-integer": "error",
    "my-lint/vaild-varibales": "warn"
  },
};
