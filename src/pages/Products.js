import React from 'react';
import { Iconly } from 'react-iconly';
import { StyleReset, Tag, Div, Container, Text } from "atomize";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Code from "../components/code"



function Products() {

  const MyJson =`
  [
    {
      "invest_id":"1",
    "investment_name":"Real Assests",
    "code_name":"RST",
  "assets":[
    {
      "sub_name":"Real Estate",
      "category":"1",
      "value":" UGX 2000",
      "code":"RST"
    }
  ]
}
]`;

  return (
    <>
      <Container>
        <Div className="contento">
          <Div className='home'>
            <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}>
              Investment products
            </Text>

            <Text>
              We make it possible for you to integrate various investment products on one tap
            </Text>
            <Div bg="#243447" rounded="md">
            <Code bg="" className="mycode" code={MyJson} language="javascript" />
            </Div>
          </Div>
          <Div m={{t:"1rem"}}>
          <Text>
            To access a full list of investment options and their sub categories make a 
            <Tag
            
          
            textSize="body"
          >
            GET
          </Tag> request on <Tag
            textSize="body"
          >
            https://api.cyanase.com.options.php
          </Tag></Text>
          </Div>

          </Div>
      </Container>
    </>
  )
}
export default Products;
