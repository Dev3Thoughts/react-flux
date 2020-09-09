import React, { useState, useEffect } from "react"
import { getCourses } from "./api/courseApi"
function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    getCourses().then((courses) => setCart(courses))
  }, [])

  return (
    <>
      <h1>Courses</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((i) => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{i.authorId}</td>
              <td>{i.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
