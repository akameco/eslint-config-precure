// @flow
const { hasAnyDep } = require('ptils')

const jest = hasAnyDep('jest') && 'precure/jest'
const flow = hasAnyDep('flow-bin') && 'precure/flowtype'
const typescript = hasAnyDep('typescript') && 'precure/typescript'
const react = hasAnyDep('react') && 'precure/react'

module.exports = {
  extends: ['precure', jest, flow, typescript, react].filter(Boolean),
}
