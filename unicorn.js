// @flow
// see https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
  plugins: ['unicorn'],
  extends: 'plugin:unicorn/recommended',
  rules: {
    // react環境等で変えたい
    'unicorn/filename-case': 0,
    // 多く場合flowtypeを使うので無効
    'unicorn/no-fn-reference-in-iterator': 0,
    // 流石にうるさい
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-nested-ternary': 0,
    'unicorn/number-literal-case': 0,
  },
}
