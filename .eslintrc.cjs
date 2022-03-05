module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  ignorePatterns: ['*.test.js'],
  rules: {
    'comma-dangle': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'warn',
    'import/extensions': [2, { js: 'always' }]
  }
};
