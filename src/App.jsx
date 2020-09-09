import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import ManageCoursePage from "./components/ManageCoursePage"
import CoursePage from "./components/CoursePage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PageNotFound from "./PageNotFound"
import Header from "./components/Header"
import About from "./About"
import Home from "./Home"

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={CoursePage} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route path="/course" component={ManageCoursePage} />
          <Route path="/about" component={About} />
          <Redirect from="/about-page" to="about" />
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </div>
    </>
  )
}

export default App
