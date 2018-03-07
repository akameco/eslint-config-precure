// @flow
// See https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
  extends: ['prettier/flowtype'],
  plugins: ['flowtype'],
  rules: {
    // 'flowtype/no-primitive-constructor-types': 2,
    // 'flowtype/require-parameter-type': [1, { excludeArrowFunctions: true }],
    'flowtype/use-flow-type': 1,

    // うーむ
    // readonlyarrayは使いづらい
    'flowtype/no-mutable-array': 0,
    'flowtype/no-unused-expressions': 0,

    // weak-typesに警告はほしいが、エラーである必要はない
    'flowtype/no-weak-types': 1,

    // 型が足りないときはflow自身が警告を出す
    'require-parameter-type': 0,

    // 基本的に推論させる
    'flowtype/require-return-type': 0,

    // 全ての宣言に型注釈が必要
    'flowtype/require-variable-type': 0,
    'flowtype/require-parameter-type': 0,

    // Flow環境の場合、ほとんどの場合flow対象にする
    'flowtype/require-valid-file-annotation': [1, 'always'],

    // prettier
    'flowtype/boolean-style': 0,

    'flowtype/no-dupe-keys': 2,
    'flowtype/define-flow-type': 2,
    'flowtype/no-types-missing-file-annotation': 2,

    'flowtype/no-primitive-constructor-types': 2,

    'flowtype/type-id-match': 0,

    // flowのコメントタイプのため
    'spaced-comment': 0,

    'flowtype/sort-keys': 0,

    // FlowFixMeの抑制。使わざる得ない場面が多いあるので許可する
    'flowtype/no-flow-fix-me-comments': 0,

    // {| |} の強制だが、流石にうるわい
    'flowtype/require-exact-type': 0,

    // *は制限しない
    'flowtype/no-existential-type': 0,

    // 型定義は常に一番上。判断は保留でwarningにしておく。
    'flowtype/require-types-at-top': 1,

    // 悩みどころだが、型定義ファイルからならimport type {}の方がよい
    'flowtype/type-import-style': 0,

    // importは@flowの後に空行はいらないが、exportするなら空行がほしい
    'flowtype/newline-after-flow-annotation': 0,

    // 何故かエラーが出る。いずれ有効にする
    'flowtype/require-types-at-top': 0,
  },
}
