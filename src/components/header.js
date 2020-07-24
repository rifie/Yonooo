import styled from 'styled-components'
import React from "react"
import { Container } from 'react-bulma-components';
import cathead from './yologo.png'
import Helmet from "react-helmet"


const Logo = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 30px;
margin-bottom: 20px;
`

export default function Header(data) {


    return (
      <div className="grads">
        <Container>
         <a href="/" title="Yonooo"><img src={cathead} width="60" alt="Yonooo"/></a>
          <Logo>Yonooo</Logo>
          <p>Instant Yes or No Button. Please use it in dire situation.</p>
        </Container>


        <Helmet>
<title>Yonooo</title>
<meta name="title" content="Yonooo" />
<meta name="description" content="Instant Yes or No Button. Please use it in dire situation." />


<meta property="og:type" content="website" />
<meta property="og:url" content="https://yonooo.xyz/"/>
<meta property="og:title" content="Yonooo"/>
<meta property="og:description" content="Instant Yes or No Button. Please use it in dire situation. "/>
<meta property="og:image" content="https://yonooo.xyz/IG2_xyz.jpg"/>
<meta property="og:image:width" content="600" />
<meta property="og:image:height" content="317" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://yonooo.xyz" />
<meta property="twitter:title" content="Yonooo" />
<meta property="twitter:description" content="Instant Yes or No Button. Please use it in dire situation." />
<meta property="twitter:image" content="https://yonooo.xyz/IG2_xyz.jpg" />




</Helmet>

      </div>
    )
  }