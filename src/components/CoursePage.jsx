import React, { useState, useEffect } from "react"
import courseStore from "../stores/courseStore"
import { Link } from "react-router-dom"
import CoursesList from "./CoursesList"

function CoursePage() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    setCourses(courseStore.getCourses())
  }, [])

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
