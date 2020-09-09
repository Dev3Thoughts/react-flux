import React from "react"

function ManageCoursePage(props) {
  return (
    <>
      <h1>Manage Course</h1>
      {props.match.params.slug}
    </>
  )
}

export default ManageCoursePage
