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
      <Mycontentp>Yonooo, (comes from Yes or No, isn't obvious?) is a tool to help you decide everything in life on daily basis. Logic and irrationality couldn't help? Too much analyzing? Your emotion radar seems off? Use Yonooo. Just think of a question and tap the button, in just a sec, you got the answer. Please use it in dire situation. Win-win. 
</Mycontentp>

<Mycontentp>All answers are copied from Magic Eight Ball answers and added mine. Just for fun.</Mycontentp>

<Mycontentheader>Outcome</Mycontentheader>

<Mycontentp>The outcome of this app for me personally is to learn React and GraphQL in the short time with Gatsby, it a fun way</Mycontentp>

<Mycontentheader>A random positivity</Mycontentheader>

<Mycontentp>Yonooo also have footer section about random positive affirmation quote that you can read every time you want to.</Mycontentp>

<Mycontentp>Enjoy Yonooo as much as I enjoyed making this to learn React. </Mycontentp>

<Mycontentp>This app is available on <a href="https://github.com/rifie/Yonooo">Github~!</a></Mycontentp>


<Mycontentheader>Colophon</Mycontentheader> 



  <ul className="ml20">
    <li className="mb20">Yonooo is design and build by Syarifah Riefandania, you can call me Rifie. I love front-end technology!  <a href="http://twitter.com/rifie">Follow my Twitter!</a></li>
<li className="mb20">This app is made with React with Gatsby and hosted at lovely Vercel.</li>
<li className="mb20">Styled Component for helping on making my own component rather than to use Material UI or anything.</li>
<li className="mb20">Bulma for layout</li>
<li className="mb20">Good weekend, random Spotify playlist and Flores coffee</li>
<li className="mb20"> I am using Trello for task management, see it public here : <a href="https://trello.com/b/ZXB94AIT/yonoooxyz">Yonooo Trello</a></li>
</ul>




<Mylink>
<Link to="/" className="mr20">Back to Home</Link>

<Link to="/about/">About</Link>
</Mylink>

</Mycontents>
</Container>

  </div>
}
