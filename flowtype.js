// @flow

// See https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
  extends: ['prettier/flowtype'],
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    // 'flowtype/no-primitive-constructor-types': 2,
    // 'flowtype/require-parameter-type': [1, { excludeArrowFunctions: true }],

    'flowtype/no-dupe-keys': 2,
    'flowtype/define-flow-type': 2,
    'flowtype/no-types-missing-file-annotation': 2,

    'flowtype/use-flow-type': 1,

    'flowtype/type-id-match': 0
  }
}
