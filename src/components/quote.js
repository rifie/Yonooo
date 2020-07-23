import React from "react"
import { Container } from 'react-bulma-components'
import { useStaticQuery, graphql } from "gatsby"
import horray from '../components/horray.png'
import styled from 'styled-components'


export default function Quote() {
  const data = useStaticQuery(
    graphql`
    query QuoteItemsQuery {
        allQuoteItemsJson {
          edges {
            node {
              affirm
            }
          }
        }
      }
    `
  );

  const Jump = styled.div`
  width: 100%;
  `
  
  //create Quote component based on query
  const Quote = ({affirm}) => (
    <div>
      <h3 class="affirms">{quote}</h3>
    </div>
  );
  
  var arrayQuotes = getQuoteItems(data);
  var quote = arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)];

  function getQuoteItems(data) {
    var QuoteItemsArray = data.allQuoteItemsJson.edges.map(item => item.node.affirm);
    return QuoteItemsArray;
  }

  return (
    <div>
      <Container>
       
        <Jump><img src={horray} alt="Horray" width="100"/></Jump>
        <Quote/>
      </Container>
    </div>
  )
}
