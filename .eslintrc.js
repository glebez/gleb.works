module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true,
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": [2, { varsIgnorePattern: "^_" }]
  }
};
