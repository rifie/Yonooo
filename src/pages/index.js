import React from "react"
import { Container } from 'react-bulma-components'
import Header from "../components/header"
import Answers from "../components/answers"
import styled from 'styled-components'
import { Link } from "gatsby"



const Thecontent = styled.div `
max-width: 680px; text-align: center; margin : auto; padding : 20px;
`

export default function Home() {
  return <div>
    <Header />
    <Thecontent>
    <Container>
     
          <Answers />
          <Link to="/about/">About</Link>
      
    </Container>
    </Thecontent>
  </div>
  
}
