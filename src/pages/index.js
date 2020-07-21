import React from "react"
import { Container } from 'react-bulma-components'
import Header from "../components/header"
import Answers from "../components/answers"
import Quote from "../components/quote"
import styled from 'styled-components'

import { Link } from "gatsby"



const Content = styled.div`
max-width: 600px; text-align: center; margin : auto; padding : 40px;
`


export default function Home() {
  return <div>
    <Header />

    <Container>
    <Content>

      
        <Answers />
        <Quote />
        <Link to="/about/">About</Link>
        </Content>
      </Container>
 

  </div>
}
