module.exports = {
  rules: {
    'no-mutate-on-merge': require('./lib/rules/no-mutate-on-merge'),
    'object-ordered': require('./lib/rules/object-ordered'),
  },
  configs: {
    recommended: {
      plugins: ['octo'],
      rules: {
        'octo/no-mutate-on-merge': 'error',
        'octo/object-ordered': 'error',
      },
    },
  },
}
