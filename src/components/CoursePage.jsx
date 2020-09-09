import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getCourses } from "../api/courseApi"
import CoursesList from "./CoursesList"

function CoursePage() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    getCourses().then((courses) => setCart(courses))
  }, [])

  return (
    <>
      <Link className="btn btn-primary m-2" to="/course">
        {" "}
        Add Course
      </Link>
      <CoursesList cart={cart} />
    </>
  )
}

export default CoursePage
