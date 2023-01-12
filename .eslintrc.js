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
  },
};
