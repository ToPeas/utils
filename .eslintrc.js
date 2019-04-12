module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'eslint:recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'eol-last': 0,
    'no-empty': 2,
    'no-extra-boolean-cast': 2,
    'curly': [2, 'all'],
    'quotes': [2, 'single'],
    'comma-dangle': [2, 'always-multiline'],
  },
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  }
}
