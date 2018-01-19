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
  },
  env: {
    'jest/globals': true,
  },
}
