import React, { useState, useEffect } from "react"
import { getCourses } from "../api/courseApi"
import CoursesList from "./CoursesList"

function CoursPage() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    getCourses().then((courses) => setCart(courses))
  }, [])

  return (
    <>
      <CoursesList cart={cart} />
    </>
  )
}

export default CoursPage
