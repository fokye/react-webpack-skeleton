module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
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
    'react'
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-duplicate-imports': ['error'],
    'no-else-return': ['error'],
    'no-iterator': ['error'],
    'no-magic-numbers': ['error', { ignore: [0, 1] }],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-labels': ['error'],
    'no-param-reassign': ['error'],
    'no-sequences': ['error'],
    'no-undefined': ['error'],
    'no-use-before-define': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'no-with': ['error'],
    'object-shorthand': ['error', 'always'],
    'rest-spread-spacing': ['error', 'never'],
    'consistent-return': ['error'],
    'prefer-destructuring': ['error', { array: true, object: true }, { enforceForRenamedProperties: true }],
    'prefer-promise-reject-errors': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'sort-imports': ['error'],
    'symbol-description': ['error'],
    'no-confusing-arrow': ['error'],
    yoda: ['error', 'never', { exceptRange: true }]
  }
};
