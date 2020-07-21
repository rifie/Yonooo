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
      <h3>{quote}</h3>
    </div>
  );
  
  var arrayQuotes = getQuoteItems(data);
  var quote = arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)];

  function getQuoteItems(data) {
    const QuoteItemsArray = [];
    data.allQuoteItemsJson.edges.forEach(item =>
        QuoteItemsArray.push(<p key={item.node.affirm}>{item.node.affirm}</p>)
    );
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

