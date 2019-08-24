module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "no-console": 2,
    "no-unused-vars": 2,
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": true
      }
    ],
    "prettier/prettier": 0,
    "comma-spacing": 2,
    indent: ["error", 2]
  }
};
