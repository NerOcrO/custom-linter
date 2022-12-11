const RuleTester = require('eslint').RuleTester

const rule = require('../../../lib/rules/object-ordered')

const parserOptions = require('./parserOptions')

const ruleTester = new RuleTester()

ruleTester.run('object-ordered', rule, {
  valid: [
    {
      code: 'const ex = { a: 1, b: 2 }',
      parserOptions,
    },
  ],
  invalid: [
    {
      code: 'const ex = { b: 1, a: 2 }',
      errors: [
        {
          messageId: 'objectOrdered',
        },
      ],
      output: 'const ex = {"a":2,"b":1}',
      parserOptions,
    },
  ],
})
