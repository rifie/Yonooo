import React from "react"
import Header from "../components/header"
import Answers from "../components/answers"
import Quote from "../components/quote"

import { Link } from "gatsby"


export default function Home() {
  return <div>
    <Header />

    <Answers />

    <Quote />

    <Link to="/about/">About</Link>


  </div>
}
