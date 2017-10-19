// @flow

// See https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  extends: ['plugin:react/recommended', 'prettier', 'prettier/react'],
  env: { browser: true },
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  plugins: ['react'],
  rules: {
    // 最適化すれば変わらないため無効。本質ではない。
    // 'react/prefer-stateless-function': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/jsx-handler-names': 2,
    'react/prefer-es6-class': [2, 'always']
  }
}
