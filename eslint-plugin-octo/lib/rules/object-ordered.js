module.exports = {
  meta: {
    fixable: 'code',
    messages: {
      objectOrdered: 'Veuillez ranger par ordre alphabétique les clés de cet objet.',
    },
  },
  create: (context) => (
    {
      ObjectExpression: (node) => {
        const rawObject = node.properties.map((property) => property.key.name)
        const orderedObject = node.properties.map((property) => property.key.name).sort()

        const result = {}
        for (const index in orderedObject) {
          const value = node.properties.find((property) => property.key.name === orderedObject[index])

          const newIndex = { [orderedObject[index]]: value.value.value }
          Object.assign(result, newIndex)
        }

        if (JSON.stringify(rawObject) !== JSON.stringify(orderedObject)) {
          context.report({
            fix: (fixer) => {
              return fixer.replaceText(node, JSON.stringify(result))
            },
            node,
            messageId: 'objectOrdered',
          })
        }
      },
    }
  ),
}
