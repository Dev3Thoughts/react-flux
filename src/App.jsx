import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import CoursPage from "./components/CoursPage"
import ManageCoursePage from "./components/ManageCoursePage"
import Header from "./components/Header"
import PageNotFound from "./PageNotFound"
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={CoursPage} />
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
