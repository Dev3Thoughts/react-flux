import React, { useState, useEffect } from "react"
import courseStore from "../stores/courseStore"
import { Link } from "react-router-dom"
import CoursesList from "./CoursesList"
import { loadCourses } from "../actions/courseActions"
function CoursePage() {
  const [courses, setCourses] = useState(courseStore.getCourses())

  useEffect(() => {
    courseStore.addChangeListener(onChange)
    if (courseStore.getCourses().length === 0) loadCourses()
    return () => courseStore.removeChangeListener(onChange) // cleanup on unMount
  }, [])

  function onChange() {
    setCourses(courseStore.getCourses())
  }

  return (
    <>
      <Link className="btn btn-primary m-2" to="/course">
        {" "}
        Add Course
      </Link>
      <CoursesList courses={courses} />
    </>
  )
}

export default CoursePage
