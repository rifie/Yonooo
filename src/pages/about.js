import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"


export default function About() {
  return <div>
      <Header />
    THis is about
    <Link to="/about/">About</Link>
  </div>
}
