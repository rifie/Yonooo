import styled from 'styled-components'
import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import ReactDOM from 'react-dom';


const Mylink = styled.div`
color : #222;
font-size : 16px;
margin-top : 40px;
line-height : 24px;
border-top : solid #c8c8c8 1px;
padding-top : 20px;
`

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
  
  const { Tagme, OneAnswer, TheButton } = newStyleAnswer();
  
  function newStyleAnswer() {
    const TheButton = styled.a`
  font-size :1.5em;
  `;
    const OneAnswer = styled.h4`
  font-size : 2.8em; 
  color : #222; 
  margin : 30px 0 30px 0;  
  font-family: 'Gochi Hand', sans-serif;
  `;
    const Tagme = styled.small`
  color: #b4b4b4; font-size : 14px;
  `;
    return { Tagme, OneAnswer, TheButton };
  }
  
  function theAnswer() {
  var answer = answers[Math.floor(Math.random() * answers.length)];
  ReactDOM.render(answer,
      document.getElementById('answerDisplay'));
      var anima = document.getElementById("answerDisplay");
      anima.classList.toggle("focus-in-expand-fwd");
  };

export default function Home() {
  return <div>
    <Header />
    
      <div className="indexcontent">
        
      <Tagme>Just think about question. E.g "Do I need to go to shower?"</Tagme>
          <OneAnswer><div id="answerDisplay"></div></OneAnswer>
      <TheButton onClick={theAnswer} className="btn">ASK ME!</TheButton>

          <Mylink>
          <Link to="/about/">About</Link>
          </Mylink>
        </div>
    
    
  </div>
  
}
