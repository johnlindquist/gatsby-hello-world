import React from "react"

const PersonTemplate = ({ pageContext }) => {
  return <div>Hi {pageContext.person.name}</div>
}

export default PersonTemplate
