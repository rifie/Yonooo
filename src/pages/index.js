import React from "react"
import Header from "../components/header"
import Answers from "../components/answers"

import { Link } from "gatsby"


export default function Home() {
  return <div>
    <Header />

    <Answers />

    <Link to="/about/">About</Link>


  </div>
}
