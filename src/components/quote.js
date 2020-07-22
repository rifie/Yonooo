import React from "react"
import { Container } from 'react-bulma-components'
import styled from 'styled-components'
import { useStaticQuery, StaticQuery, Link, graphql } from "gatsby"


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
        <Quote/>
      </Container>
    </div>
  )
}
