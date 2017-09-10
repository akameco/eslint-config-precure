'use strict'
const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: ['prettier', 'flowtype', 'react', 'import'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    // prettier
    // 'prettier/prettier': [
    // ERROR,
    // { trailingComma: 'es5', singleQuote: true, semi: false }
    // ],
    // rules
    'no-var': ERROR,
    'object-shorthand': [ERROR, 'always'],
    'prefer-arrow-callback': ERROR,
    'prefer-const': [ERROR, { destructuring: 'all' }],
    'prefer-numeric-literals': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR,
    // 'prefer-destructuring': [
    // ERROR,
    // { array: true, object: true },
    // { enforceForRenamedProperties: true },
    // ],

    // 'comma-dangle': ['error', 'never'],
    'no-await-in-loop': ERROR,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': ERROR,
    'no-constant-condition': ERROR,
    'no-control-regex': ERROR,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty-character-class': ERROR,
    'no-empty': [ERROR, { allowEmptyCatch: true }],
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': ERROR,
    // 'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': ERROR,
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ERROR, // prettier?
    'no-obj-calls': ERROR,
    'no-prototype-builtins': ERROR,
    'no-regex-spaces': ERROR,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': ERROR,
    'no-unreachable': ERROR,
    'no-unsafe-finally': ERROR,
    'no-unsafe-negation': ERROR,
    'use-isnan': ERROR,
    'valid-typeof': [ERROR, { requireStringLiterals: true }],
    'no-unexpected-multiline': ERROR,
    'accessor-pairs': ERROR,
    'array-callback-return': ERROR,
    'block-scoped-var': ERROR,
    complexity: WARNING,
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [ERROR, { exceptMethods: [] }],
    'consistent-return': ERROR,
    curly: ERROR,
    'default-case': ERROR,
    'dot-notation': ERROR,
    'dot-location': [ERROR, 'property'],
    eqeqeq: ERROR,
    'guard-for-in': ERROR,
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-case-declarations': ERROR,
    'no-else-return': ERROR,
    'no-empty-pattern': ERROR,
    'no-eq-null': ERROR,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-fallthrough': ERROR,
    'no-global-assign': ERROR,
    'no-implicit-coercion': ERROR,
    'no-implied-eval': ERROR,
    'no-iterator': ERROR,
    'no-labels': ERROR,
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    'no-multi-str': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-new': ERROR,
    'no-new-require': ERROR,
    'no-octal-escape': ERROR,
    'no-octal': ERROR,
    'no-proto': ERROR,
    'no-redeclare': ERROR,
    'no-return-assign': [ERROR, 'always'],
    'no-return-await': ERROR,
    'no-script-url': ERROR,
    'no-self-assign': [ERROR, { props: true }],
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-labels': ERROR,
    'no-useless-call': ERROR,
    'no-useless-concat': ERROR,
    'no-useless-escape': ERROR,
    'no-useless-return': ERROR,
    'no-void': ERROR,
    'no-warning-comments': WARNING,
    'no-with': ERROR,
    'prefer-promise-reject-errors': [ERROR, { allowEmptyReject: true }],
    radix: ERROR,
    // 'wrap-iife': [ERROR, 'inside', {functionPrototypeMethods: true}],
    yoda: ERROR,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-restricted-globals': [ERROR, 'event'],
    'no-shadow-restricted-names': ERROR,
    'no-undef-init': ERROR,
    'no-undef': [ERROR, { typeof: true }],
    'no-unused-vars': [
      ERROR,
      { argsIgnorePattern: '^_+$', ignoreRestSiblings: true }
    ],
    'no-use-before-define': [ERROR, 'nofunc'],
    'handle-callback-err': [WARNING, 'err'],
    'no-mixed-requires': [ERROR, { grouping: true, allowCall: true }],
    'no-path-concat': ERROR,
    'no-restricted-imports': [
      'error',
      'domain',
      'freelist',
      'smalloc',
      'sys',
      'colors'
    ],
    'no-restricted-modules': [
      'error',
      'domain',
      'freelist',
      'smalloc',
      'sys',
      'colors'
    ],
    // 'array-bracket-spacing': [ERROR, 'never'],
    // 'brace-style': [ERROR]
    camelcase: [ERROR, { properties: 'always' }],
    // 'capitalized-comments': [ERROR, 'always']
    // 'comma-spacing': ERROR
    // 'comma-style': [ERROR, 'last'],
    // 'computed-property-spacing': [ERROR, 'never'],
    'eol-last': ERROR,
    // 'func-call-spacing': [ERROR, 'never'],
    'func-name-matching': ERROR,
    'func-names': [ERROR, 'never'],
    // indent: ERROR
    // 'jsx-quotes': ERROR,
    // 'key-spacing': ERROR
    // 'keyword-spacing': ERROR,
    'linebreak-style': [ERROR, 'unix'],
    'max-depth': WARNING,
    'max-nested-callbacks': [WARNING, 4],
    'max-params': [WARNING, { max: 4 }],
    // 'max-statements-per-line': ERROR,
    'new-cap': [ERROR, { newIsCap: true, capIsNew: true }],
    // 'new-parens': ERROR,
    'no-array-constructor': ERROR,
    'no-lonely-if': ERROR,
    // https://github.com/prettier/eslint-config-prettier#no-mixed-operators
    'no-mixed-operators': OFF,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multi-assign': ERROR,
    // 'no-multiple-empty-lines': [ERROR, { max: 1 }],
    'no-negated-condition': ERROR,
    'no-new-object': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    // 'no-whitespace-before-property': ERROR,
    // 'no-trailing-spaces': ERROR,
    'no-unneeded-ternary': ERROR,
    // 	'object-curly-spacing': [ERROR, 'never'],
    'one-var': [ERROR, 'never'],
    'one-var-declaration-per-line': ERROR,
    'operator-assignment': [ERROR, 'always'],
    // 'operator-linebreak': [ERROR, 'after'],
    // 'padded-blocks': [ERROR, 'never'],
    // 'quote-props': [ERROR, 'as-needed'],
    // quotes: [ERROR, 'single', { allowTemplateLiterals: true }],

    // 'semi-spacing': [ERROR, { before: false, after: true }],
    // semi: [ERROR, 'always'],
    // 'space-before-blocks': [ERROR, 'always'],
    // 'space-before-function-paren': [ERROR']
    // 'space-in-parens': [ERROR, 'never'],
    // 'space-infix-ops': ERROR,
    // 'space-unary-ops': ERROR,
    'spaced-comment': [
      ERROR,
      'always',
      {
        line: { exceptions: ['-'] },
        block: { markers: ['!'], balanced: true }
      }
    ],
    // 'template-tag-spacing': [ERROR, 'never'],
    'unicode-bom': [ERROR, 'never'],
    // 'arrow-parens': [ERROR, 'as-needed'],
    // 'arrow-spacing': ERROR,
    'constructor-super': ERROR,
    // 'generator-star-spacing': [ERROR, 'both'],
    'no-class-assign': ERROR,
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-new-symbol': ERROR,
    'no-this-before-super': ERROR,
    'no-useless-computed-key': ERROR,
    'no-useless-constructor': ERROR,
    'no-useless-rename': ERROR,
    'require-yield': ERROR,
    // 'rest-spread-spacing': [ERROR, 'never'],
    'symbol-description': ERROR,
    'template-curly-spacing': ERROR,
    // 'yield-star-spacing': [ERROR, 'both']

    // react
    // 'react/prefer-stateless-function': ERROR,
    'react/jsx-boolean-value': ERROR,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }],
    'react/jsx-handler-names': ERROR,
    'react/prefer-es6-class': [ERROR, 'always'],

    // flow https://github.com/gajus/eslint-plugin-flowtype
    // 'flowtype/no-primitive-constructor-types': ERROR,
    // 'flowtype/require-parameter-type': [
    // WARNING,
    // { excludeArrowFunctions: true }
    // ],
    'flowtype/no-dupe-keys': ERROR,
    'flowtype/type-id-match': OFF,
    'flowtype/define-flow-type': ERROR,
    'flowtype/no-types-missing-file-annotation': ERROR,
    'flowtype/use-flow-type': WARNING,

    // import
    'import/newline-after-import': ERROR,
    'import/imports-first': ERROR,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': ERROR,
    'import/no-mutable-exports': ERROR,
    'import/no-commonjs': OFF,
    'import/order': ERROR
  }
}
