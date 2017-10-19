module.exports = {
  extends: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'arrow-body-style': 0,
    'capitalized-comments': 0, // wHO CaRes?
    'consistent-this': 0,
    'func-style': 0,
    'max-lines': 0,
    'id-length': 0, // when using short composable functions, using single-letter variables is fine
    'id-match': [
      2,
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'id-blacklist': 2,
    'init-declarations': 0,
    'line-comment-position': 0,
    'lines-around-comment': 0,
    'lines-around-directive': 0,
    'lines-between-class-members': 0,
    'max-statements': [2, 30],
    'max-statements-per-line': [2, { max: 1 }], // prettier?

    'no-plusplus': 0,
    'no-ternary': 0,
    'no-underscore-dangle': 0,

    'no-bitwise': 2,
    'no-continue': 2,
    'no-lonely-if': 2,
    'no-multi-assign': 2,
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 2,
    'no-new-object': 2,
    'one-var': [2, { uninitialized: 'always', initialized: 'never' }],
    'prefer-destructuring': 0,
    'require-jsdoc': 0,
    'sort-imports': 0,
    'sort-keys': 0,
    'sort-vars': 0,
    'spaced-comment': 0,
    'padding-line-between-statements': 0,
    'no-inline-comments': 0,
    'multiline-comment-style': 0,
    'unicode-bom': 0,
  },
}
