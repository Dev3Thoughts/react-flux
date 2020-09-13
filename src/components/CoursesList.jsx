import React from "react"
import { Link } from "react-router-dom"
function CoursesList(props) {
  return (
    <>
      <h1>Courses List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th># Author ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((i) => (
            <tr key={i.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteCourse(i.id)}
                >
                  Delete
                </button>
              </td>
              <td>{i.authorId}</td>
              <td>
                <Link to={"/course/" + i.slug}>{i.title}</Link>
              </td>
              <td>{i.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default CoursesList
