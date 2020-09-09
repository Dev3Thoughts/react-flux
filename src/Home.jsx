import React from "react"
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="jumbotron mt-4 border">
      <h1>Home</h1>
      <p>
        Semiotics ethical prism trust fund deep v leggings edison bulb drinking
        vinegar. Affogato yuccie drinking vinegar fixie biodiesel polaroid swag
        sustainable viral pork belly PBR&B chartreuse helvetica sriracha.
        Waistcoat vegan listicle, pickled banjo chillwave fashion axe activated
        charcoal ugh jianbing succulents vaporware. Yr authentic brunch marfa.
        Kitsch meh portland disrupt.
      </p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  )
}

export default Home
