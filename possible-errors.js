// @flow

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'for-direction': 2,
    'getter-return': ['error', { allowImplicit: true }],
    'no-cond-assign': 2,
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-compare-neg-zero': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    // 'valid-jsdoc': [2, { requireReturn: false }],
    'valid-jsdoc': 0,

    // es6
    'no-new-symbol': 2,
    'constructor-super': 2,
    'no-await-in-loop': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,
    'no-dupe-class-members': 2,
    'prefer-object-spread': 2,
    'prefer-named-capture-group': 2,
  },
}
