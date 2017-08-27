module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@phryg1an/eslint-plugin-strict/recommended',
    'plugin:@phryg1an/eslint-plugin-strict/style'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@phryg1an/eslint-plugin-strict'
  ]
};
