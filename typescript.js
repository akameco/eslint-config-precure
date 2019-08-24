module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    // バージョンエラーを抑制
    warnOnUnsupportedTypeScriptVersion: false,
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
    '@typescript-eslint/array-type': 'error',
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
          // TODO: Enforce `undefined` over `null` here too?
        },
      },
    ],
    // 悩ましいがts-ignoreは使わざる得ない場合がある
    '@typescript-eslint/ban-ts-ignore': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': [
      'error',
      { properties: 'always', ignoreDestructuring: false },
    ],
    '@typescript-eslint/class-name-casing': 'error',
    // 有効にしたいが、tsxとの組み合わせがよくないので一旦警告に留める
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        // allowTypedFunctionExpressions: true,
      },
    ],
    // '@typescript-eslint/explicit-function-return-type': '',
    // すべてがpublicであるべき
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
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
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
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
    // interfaceよりtype
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',

    // prettierで修正される
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/semi': 'off',
    // 挙動が怪しいのでOFFにする
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // type-checkに時間がかかるのでoff
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/unbound-method': 'off',
    // arr.length - 1 === index のパターンがある
    '@typescript-eslint/no-magic-numbers': 'off',
    // ドキュメントに記載なし
    '@typescript-eslint/indent-new-do-not-use': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'never' }],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
        ignoreRestArgs: true,
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    // Disabled because of https://github.com/typescript-eslint/typescript-eslint/issues/647
    '@typescript-eslint/no-floating-promises': 'off',
    // 様子見
    // @see https://github.com/typescript-eslint/typescript-eslint/pull/612
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/require-await': 'off',
    // tscで型チェックされるので問題なし/書き心地を優先
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
}
