import React from "react"
import { Container } from 'react-bulma-components'
import Header from "../components/header"
import Answers from "../components/answers"
import styled from 'styled-components'
import Footer from "../components/footer"

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
        <Link to="/about/">About</Link>
        </Content>
      </Container>

      <Footer>
       
      </Footer>
 

  </div>
}
