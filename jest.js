// @flow
module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/valid-expect': 2,
    'jest/prefer-to-have-length': 2,
    'jest/prefer-to-be-undefined': 0,
    'jest/prefer-to-be-null': 0,
    'jest/no-large-snapshots': 0,
    'jest/prefer-expect-assertions': 0,
    'jest/valid-expect-in-promise': 0,
    'jest/consistent-test-it': 2,
    'jest/no-test-prefixes': 2,
    'jest/valid-describe': 2,
    'jest/lowercase-name': 0, // 日本人だぞ！
    'jest/no-hooks': 0, // やはりうるさかった
    'jest/no-jest-import': 2,
    'jest/prefer-strict-equal': 2,
    'jest/expect-expect': 2, // TODO: 一旦入れて様子見
    'jest/no-alias-methods': 2,
    'jest/no-test-return-statement': 2,
    'jest/no-jasmine-globals': 2,
    'jest/require-tothrow-message': 2,
    'jest/prefer-inline-snapshots': 0,
  },
  env: {
    'jest/globals': true,
  },
}
