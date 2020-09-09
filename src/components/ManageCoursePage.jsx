import React from "react"
import CourseForm from "./CourseForm"
function ManageCoursePage(props) {
  return (
    <>
      <h1>Manage Course</h1>
      <CourseForm />
      {props.match.params.slug}
    </>
  )
}

export default ManageCoursePage
