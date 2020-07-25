import styled from 'styled-components'
import React from "react"
import ReactDOM from 'react-dom';

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

const { Egs, Tagme, OneAnswer, TheButton } = newStyleAnswer();

function newStyleAnswer() {
  const TheButton = styled.a`
font-size :1.5em;
`;
  const OneAnswer = styled.h4`
font-size : 2.4em; 
color : #222; 
margin : 30px 0 30px 0;  
font-family: 'Gochi Hand', sans-serif;
`;
  const Tagme = styled.small`
color: #636466; font-size : 16px; clear: both;
`;

const Egs = styled.small`
color: #c8c8c8; font-size : 14px;
`;

  return { Egs, Tagme, OneAnswer, TheButton };
}

function theAnswer() {
var answer = answers[Math.floor(Math.random() * answers.length)];
ReactDOM.render(answer,
    document.getElementById('answerDisplay'));
    var anima = document.getElementById("answerDisplay");
    anima.classList.toggle("focus-in-expand-fwd");
};

export default function Answers() {
  return <div>
          <Tagme>Hello master! <br/>Think about a question in mind and tap the button to know the answer!</Tagme>
          <Egs><br /> E.g "Do i need to go out and meet my girlfriend?"</Egs>
          
          <OneAnswer><div id="answerDisplay"></div></OneAnswer>
      <TheButton onClick={theAnswer} className="btn">SHOW ME!</TheButton>
  </div>
}
