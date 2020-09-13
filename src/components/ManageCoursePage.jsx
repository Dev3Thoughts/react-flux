import React, { useState, useEffect } from "react"
import CourseForm from "./CourseForm"
import * as courseApi from "../api/courseApi"
import { toast } from "react-toastify"

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({})

  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  })

  useEffect(() => {
    const slug = props.match.params.slug
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => {
        setCourse(_course)
      })
    }
  }, [props.match.params.slug])

  function handleChange({ target }) {
    // copy of the object
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    }
    setCourse(updatedCourse)
  }

  function formIsValid() {
    const _errors = {}
    if (!course.title) _errors.title = "Title is required"
    if (!course.category) _errors.category = "Category is required"
    if (!course.authorId) _errors.authorId = "Author Id is required"
    setErrors(_errors)
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0
  }

  function handelSubmit(event) {
    event.preventDefault()
    if (!formIsValid()) return
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses")
      toast.success("Course saved.")
    })
  }

  return (
    <>
      <h3>Manage Course</h3>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handelSubmit}
      />
    </>
  )
}

export default ManageCoursePage
