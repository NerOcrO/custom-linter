const createPlugin = require('stylelint').createPlugin

module.exports = ['no-font-properties', 'no-hexadecimal-color'].map(ruleName =>
  createPlugin(`octo/${ruleName}`, require(`./${ruleName}`))
)
