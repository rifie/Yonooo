import React from "react"
import { Container } from 'react-bulma-components';
import styled from 'styled-components'



const Logo = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 50px;
margin-bottom: 20px;
`

export default function Header() {
    return (

      <div className="grads">

        <Container>
          <Logo>Yonooo</Logo>
          <p>Your everyday decision maker tool. Please use it in dire situation.</p>
        </Container>
        
      </div>

    )

  }