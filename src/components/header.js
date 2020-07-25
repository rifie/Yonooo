import styled from 'styled-components'
import React from "react"
import { Container } from 'react-bulma-components';
import cathead from './yologo.png'
import Helmet from "react-helmet"


const Logo = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 30px;
margin-bottom: 0;
`

export default function Header(data) {


    return (
      <div className="grads">
        <Container>
         <a href="/" title="Yonooo"><img src={cathead} width="60" alt="Yonooo"/></a>
          <Logo>Yonooo</Logo>
          <p>Get instant answer without overthinking.</p>
        </Container>


        <Helmet>
<title>Yonooo. Get instant answer without overthinking.</title>
<meta name="title" content="Yonooo. Get instant answer without overthinking." />
<meta name="description" content="Yonooo is an instant answer generator for faster decision making" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yonooo.xyz/"/>
<meta property="og:title" content="Yonooo. Get instant answer without overthinking."/>
<meta property="og:description" content="Yonooo is an instant answer generator for faster decision making"/>
<meta property="og:image" content="https://yonooo.xyz/IG2_xyz.jpg"/>
<meta property="og:image:width" content="800" />
<meta property="og:image:height" content="400" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://yonooo.xyz" />
<meta property="twitter:title" content="Yonooo. Get instant answer without overthinking." />
<meta property="twitter:description" content="Yonooo is an instant answer generator for faster decision making" />
<meta property="twitter:image" content="https://yonooo.xyz/IG2_xyz.jpg" />


</Helmet>

      </div>
    )
  }