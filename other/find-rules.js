/* eslint-disable no-console */
const getRuleFinder = require('eslint-find-rules')
const getRuleDocs = require('eslint-rule-docs')

const input = process.argv.slice(2)

const ruleFinder = getRuleFinder(input[0])

const unusedRules = ruleFinder.getUnusedRules()

for (const rule of unusedRules) {
  console.log(rule)
  console.log(getRuleDocs(rule).url)
}
