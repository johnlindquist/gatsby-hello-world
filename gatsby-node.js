const path = require("path")
const people = [{ name: "John" }, { name: "Mindy" }, { name: "Ben" }]
const query = `
{
  allPerson {
    edges {
      node {
        id
        name
      }
    }
  }
}
`

exports.sourceNodes = ({
  actions: { createNode },
  createNodeId,
  createContentDigest
}) => {
  people.forEach(person => {
    createNode({
      ...person,
      id: createNodeId(`person-${person.name}`),
      internal: {
        type: `Person`,
        contentDigest: createContentDigest(person)
      }
    })
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(query)
  result.data.allPerson.edges.forEach(({ node: person }) => {
    createPage({
      path: person.name,
      component: path.resolve(`./src/templates/PersonTemplate.js`),
      context: {
        person
      }
    })
  })
}
