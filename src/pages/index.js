import styled from 'styled-components'
import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Answers from "../components/answers"
import Quote from "../components/quote"

const Mylink = styled.div`
color : #222;
font-size : 16px;
margin-top : 40px;
line-height : 24px;
border-top : solid #c8c8c8 1px;
padding-top : 20px;
`
export default function Home() {
  return <div>
    <Header />
      <div className="indexcontent">
        <Answers />
         <div class="clear"></div>
         <Quote />
          <Mylink>
          <Link to="/about/">About</Link>
          </Mylink>
        </div>
  </div>
}
