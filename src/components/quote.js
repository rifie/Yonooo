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

const {quotes} = StaticQuery(graphql `
{
  quotes: allQuoteItemsJson {
    edges {
      node {
        affirm
      }
    }
  }
}
`);
    

      //create Quote component based on query
      const Quote = ({affirm}) => (
        <div>
       <h3>{quotes.affirm}</h3>
        </div>
      );

    //   function TheQuote(data){
    //       const quotes = [];
    var Arrayquotes = getQuoteItems(quotes)
    var quote = Arrayquotes[Math.floor(Math.random() * Arrayquotes.length)];

    //     data.allQuoteItemsJson.edges(quote => 
    //         quote.push(<p>{quote.node.affirm}</p>)
    //     );

    //     return quote;

    //   }

    //  const Quote = ({affirm}) =>
    // <div>
    //   <h2>{affirm}</h2>
    // </div>

      function getQuoteItems(data) {
          const QuoteItemsArray = [];
          data.allQuoteItemsJson.edges.forEach(item =>
            
            QuoteItemsArray.push(<p key={item.node.affirm}>{item.node.affirm}</p>)
            
            );
            return QuoteItemsArray;
      }







  //    function TheQuote(data){
  //        const rquote = '';
  //        var quote = rquotes[Math.floor(Math.random() * rquotes.length)];
  //       //  var QuoteItems data.allQuoteItemsJson.
  //    }

  return (
    <div>
      <Container>
        <Quote  />
      </Container>

  </div>
  )
}

