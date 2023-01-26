import React from 'react';
import { StyleReset, Tag, Div, Row, Col, Text, Container, Button } from "atomize";
function Inline() {
  return (
    <Container>
      <div className="contento">
        <div className='home'>
          <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}>
            Getting started
          </Text>
          <Div m={{ t: "1rem" }}>
            <Text textSize="subheader">
              The following are the step by step requirements needed to get  started with the Cyanase API .
            </Text>
            <Div m={{ t: "1rem" }}>
              <ul>
                <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}>
                  API account
                </Text>
                <Text>
                  Using the cyanase investment api
                  requires you to have two accounts as guided below.
                </Text>
                <Div p="0.5rem">
                  <li>
                    <b>Regular investment account</b>
                    <Text>
                      You create this account through the website or mobile application just like any regular
                      Cyanase user. <a href="https://auth.cyanase.com/signup">
                        <Button rounded="md" bg="#252859" >Create account</Button></a>
                    </Text>
                  </li>
                </Div>
                <Div p="0.5rem">
                  <li>
                    <b>API account account</b>
                    <Text>
                      This account requires additional information,
                      as such follow the following steps to create one.
                    </Text>
                    <ol>
                      <li>
                        Login to your regular account using your desktop or laptop (This feature
                        is not available for mobile phones)
                        <a href="http://auth.cyanase.com">
                          <Tag
                            bg={`#ff9b00`}
                            textColor="#252859"
                            textSize="body"
                          >
                            Login here
                          </Tag>
                        </a>
                      </li>
                      <li>
                        Click on the <b>Account tab</b> at the top part of your home page
                      </li>
                      <li>
                        From the dropdown menu, choose API account
                      </li>
                      <li>
                        Proceed to enter all your user details and verify your account
                      </li>
                      <li>
                        Submit your account details to have full access to the API.
                      </li>
                    </ol>
                  </li>
                </Div>

              </ul>
              <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}>
                API Key
              </Text>
              <Div>
                <Text>
                  Having access to all the API features requires you to have an API key. To get your API key,
                </Text>
                <ul>
                  <li>
                Login to your regular account using your desktop or laptop (This feature
                        is not available for mobile phones)
                        <a href="http://auth.cyanase.com">
                          <Tag
                            bg={`#ff9b00`}
                            textColor="#252859"
                            textSize="body"
                          >
                            Login here
                          </Tag>
                        </a>
                      </li>
                  <li>
                    Click on the <b>Account tab</b> at the top part of your home page(desktop version of the website).
                  </li>
                  <li>
                    From the dropdown menu choose API account
                  </li>
                  <li>
                    From your dashboard your will be able to access your API keys, edit and copy and adjust it.
                  </li>
                </ul>
              </Div>
            </Div>

          </Div>

        </div>
      </div>
    </Container>
  );
}

export default Inline;
