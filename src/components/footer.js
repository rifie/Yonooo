import React from "react"
import { Container } from 'react-bulma-components'
import styled from 'styled-components'
import Quote from "../components/quote"

export default function Footer() {

  return (
    <div className="footer">
      <Container>
        <Quote/>
      </Container>
    </div>
  )
}
