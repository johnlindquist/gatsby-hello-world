const path = require("path")

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const people = [{ name: "John" }, { name: "Mindy" }, { name: "Ben" }]

  people.forEach(person => {
    createPage({
      path: person.name,
      component: path.resolve("./src/PersonTemplate.js"),
      context: person
    })
  })
}
