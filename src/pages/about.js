import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import { Container } from 'react-bulma-components'
import styled from 'styled-components'


const Mycontents = styled.div`
max-width: 680px; text-align: left; margin : auto auto 60px auto; padding : 20px;
`
const Mycontentheader = styled.h2`
font-family: 'Gochi Hand', sans-serif;
font-size : 2em;
margin-bottom : 10px;
margin-top : 20px;
color : #222;
`
const Mycontentp = styled.p`
color : #222;
font-size : 16px;
margin-bottom : 10px;
line-height : 24px;
text-align : justify;
`

const Mylink = styled.div`
color : #222;
font-size : 16px;
margin-top : 40px;
line-height : 24px;
border-top : solid #c8c8c8 1px;
padding-top : 20px;
`

export default function About() {
  return <div>
      <Header />

      <Container>
        <Mycontents>
          <Mycontentheader>About Yonooo</Mycontentheader>
      <Mycontentp>Yonooo, (comes from Yes or No, isn't obvious?) is a tool to help you decide everything in life on daily basis. Logic and irrationality couldn't help? Too much analyzing? Your feeling seems off? Please use Yonooo. Just think of a question and tap the button, in just a sec, you got the answer. Please use it in dire situation. Win-win. 
</Mycontentp>

<Mycontentp>All answers are copied from Magic Eight Ball answers and added mine. Just for fun.</Mycontentp>

<Mycontentheader>Outcome</Mycontentheader>

<Mycontentp>The outcome of this app for me personally is to learn React in the short time with Gatsby. For others, well you might find it useful and for fun purpose on daily basis.</Mycontentp>

<Mycontentheader>A random positivity</Mycontentheader>

<Mycontentp>Yonooo also have footer section about random positive affirmation quote that you can read every time you want to.</Mycontentp>

<Mycontentp>Enjoy Yonooo as much as I enjoyed making this to learn React. If you like it don't forget to share it on your social media so you also spread positivity!</Mycontentp>

<Mycontentp>This app is available on Github~!</Mycontentp>

<Mylink>
<Link to="/" className="mr20">Back to Home</Link>

<Link to="/about/">About</Link>
</Mylink>

</Mycontents>
</Container>

  </div>
}
