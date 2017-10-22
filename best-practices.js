// @flow

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-buffer-constructor': 2,
    'no-duplicate-imports': 2,

    'no-div-regex': 2,

    'no-empty-function': 0, // 全てはここから始まる

    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0, // sometimes this is ok (foo.length - 1 == index of last one)

    'no-param-reassign': 0,

    // variables
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 0,

    // strict, cjsでも書きたいときがあるが切り分けが難しいので無効
    strict: 0,

    // CommonJS
    // うるさいだけ http://eslint.org/docs/rules/callback-return
    'handle-callback-err': [1, 'err'],
    'no-mixed-requires': [2, { grouping: true, allowCall: false }],
    'no-path-concat': 2,
    'no-new-require': 2,

    'callback-return': 0,
    'no-process-env': 0,
    'no-process-exit': 2,
    'no-sync': 0,

    'global-require': 1,

    'require-await': 2,

    'vars-on-top': 2,

    // よくわからない
    'no-restricted-properties': 0,

    // es6
    'prefer-template': 2,
    'require-yield': 2,
    'symbol-description': 2,
  },
}
