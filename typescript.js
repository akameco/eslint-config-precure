module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    // バージョンエラーを抑制
    loggerFn: false,
    sourceType: 'module',
    jsx: true,
    project: 'tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', 'array'],
    // @see https://github.com/xojs/eslint-config-xo-typescript/blob/25141762939d766ec0cf569571a430fdfbd51dae/index.js#L36-L68
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Object: {
            message: 'Use `object` instead.',
            fixWith: 'object',
          },
          object: 'Use `{}` instead.',
          Function: 'Use a specific function type instead, like `() => void`.',

          // This one doesn't seem to be working.
          // TODO: Report it.
          any: {
            message: 'Use `unknown` instead.',
            fixWith: 'unknown',
          },
          // TODO: Enforce `undefined` over `null` here too?
        },
      },
    ],
    camelcase: 'off',
    '@typescript-eslint/camelcase': [
      'error',
      { properties: 'always', ignoreDestructuring: false },
    ],
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    // '@typescript-eslint/explicit-function-return-type': '',
    // すべてがpublicであるべき
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // Tまたは2文字以上の任意の文字列を許容する
    '@typescript-eslint/generic-type-naming': ['error', '^T$|^[A-Z][a-zA-Z]+$'],
    // prettier
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],
    // prettierで自動修正
    '@typescript-eslint/member-delimiter-style': 'off',
    // TypeScript以外のデバックツールで役に立つ。また今後private(#)への置換が楽
    '@typescript-eslint/member-naming': ['error', { private: '^_' }],
    // 自動修正されないのでうるさい可能性が大きい
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    // ライブラリでanyが多かったら考える
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',

    // TODO: ignoreParametersについては考える余地がある
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 'error',
    // 混乱の元
    '@typescript-eslint/no-parameter-properties': 'error',
    // 一旦 cosnt {props, state} = this; も無効
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-triple-slash-reference': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-type-alias': 'off',

    'no-unused-vars': 'off',
    // TODO: ジェネリックで使用される型には効かないの修正されるまでOFF
    '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': [
    // 'error',
    // {
    // vars: 'all',
    // args: 'after-used',
    // ignoreRestSiblings: true,
    // argsIgnorePattern: '^_$',
    // caughtErrors: 'all',
    // caughtErrorsIgnorePattern: '^_$',
    // },
    // ],
    '@typescript-eslint/no-var-requires': 'error',
    // どちらかに統一した方が望ましい。コミュニティ的には、interfaceがメジャーなので従う。
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',

    // prettierで修正される
    '@typescript-eslint/type-annotation-spacing': 'off',
  },
}
