import React from "react"
import { Container } from 'react-bulma-components';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import cathead from './yonooo_logo.png'

let answers =[
'"As I see it, yes."',
'"Ask again later."',
'"Better not tell you now."',
'"Cannot predict now."',
'"Concentrate and ask again."',
'"Don’t count on it."',
'"It is certain."',
'"It is decidedly so."',
'"Most likely."',
'"My reply is no."',
'"My sources say no."',
'"Outlook not so good."',
'"Outlook good."',
'"Reply hazy, try again."',
'"Signs point to yes."',
'"Very doubtful."',
'"Without a doubt."',
'"Yes."',
'"Yes – definitely."',
'"You may rely on it."',
'"Nooooooo."',
'"It is obvious."'
];

function theAnswer() {
var answer = answers[Math.floor(Math.random() * answers.length)];
ReactDOM.render(answer,
    document.getElementById('answerDisplay'));
    var anima = document.getElementById("answerDisplay");
    anima.classList.toggle("focus-in-expand-fwd");
};


const TheButton = styled.a `
font-size :1.5em;
`
const OneAnswer = styled.h2 `
font-size : 3em; color : #222; margin : 30px 0 30px 0;  font-family: 'Gochi Hand', sans-serif;

`
const Tagme = styled.p `
color: #b4b4b4; font-size : 14px;
`
export default function Answers() {
  return <div>

      <Container>
          <Tagme>Just think about question. E.g "Do I need to go to shower?"</Tagme>
          <OneAnswer><div id="answerDisplay"></div></OneAnswer>
      <TheButton><a onClick={theAnswer} className="btn">tap me</a></TheButton>
      
      </Container>


  </div>
}
