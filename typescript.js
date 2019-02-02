module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    loggerFn: false,
  },
  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
  },
}
