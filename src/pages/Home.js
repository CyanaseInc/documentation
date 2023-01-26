import React from 'react';
import { Container, Text, Tag, Div, Col, Row, Icon } from "atomize";
import "../../docs/app.css";
import { Link } from 'react-router-dom';
import { Iconly } from 'react-iconly';

function Home() {

  return (
    <Container>
      <div className="contento">
        <div className='home'>
          <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}
          >Welcome to the Cyanase Investors API documentation
          </Text>
          <Text tag="p">Cyanase API enables you to integrate investing features into your mobile
            app or website in a frictionless way.</Text>
          <ol class="lists">
            <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}
            >Use cases
            </Text>

            <Row p={{ x: "0.75rem", y: "0.25rem" }} flexDir={{ xs: 'column', lg: 'row' }}>
              <Col>
                <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                  <Iconly

                    name="Chart"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                </Div>
                <li>
                  <Text className="mytitle" textWeight="600" textColor={`#252859`}>Investment products</Text>
                </li>


                <p className="small">Make it possible for people using your systems to invest in stocks, bonds
                  Real estate, index funds and Cryptocurrencies. </p>
              </Col>
              <Col>
                <Div bg="gray200" align="center" textAlign="center">
                  <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                    <Iconly

                      name="Graph"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    />
                  </Div>
                </Div>
                <li>
                  <Text className="mytitle" textWeight="600" textColor={`#252859`}>
                    Invest & Save in Dollars
                  </Text>
                </li>
                <p className="small">Enables your customers to safely open up
                  investment accounts and maintain them in foreign currencies.</p>
              </Col>

            </Row>

            <Row p={{ x: "0.75rem", y: "0.25rem" }} flexDir={{ xs: 'column', lg: 'row' }}>

              <Col>
                <Div bg="gray200" align="center" textAlign="center">
                  <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                    <Iconly

                      name="TimeCircle"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    />
                  </Div>
                </Div>
                <li>
                  <Text className="mytitle" textWeight="600" textColor={`#252859`}>Goal Based investing</Text>
                </li>
                <p className="small"> Create a piggy bank and enable your customers 
                to set financial goals and invest to achieve them.</p>
              </Col>
              <Col>
                <Div bg="gray200" align="center" textAlign="center">
                  <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                    <Iconly

                      name="Filter"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    />
                  </Div>
                </Div>
                <li><Text className="mytitle" textWeight="600" textColor={`#252859`}>Automated investments</Text></li>
                <p className="small">Enables your customers to automatically save their money as soon as they earn. this is the fastest
                  way to help them reach their financial freedom.</p>

              </Col>

            </Row>
          </ol>
          <ul class="lists">
            <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}
            >integration Examples
            </Text>

            <Row p={{ x: "0.75rem", y: "0.25rem" }} flexDir={{ xs: 'column', lg: 'row' }}>
              <Col >
                <Div bg="gray200" align="center" textAlign="center">
                  <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                    <Iconly

                      name="People"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    />
                  </Div>
                </Div>
                <li>
                  <Text className="mytitle" textWeight="600" textColor={`#252859`}>Edutech platforms</Text>
                </li>
                <p className="small">Introduce saving & investing to students
                  using your platform by making use of our API.
                  .</p></Col>
              <Col >
                <Div bg="gray200" align="center" textAlign="center">
                  <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                    <Iconly

                      name="Wallet"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    />
                  </Div>
                </Div>
                <li>
                  <Text className="mytitle" textWeight="600" textColor={`#252859`}> Fintech platforms</Text>
                </li>
                <p className="small">Let your customers have access to
                  a wide range of investment products.</p>
              </Col>
            </Row>


            <Row p={{ x: "0.75rem", y: "0.25rem" }} flexDir={{ xs: 'column', lg: 'row' }}>
              <Col>
                <Div bg="gray200" align="center" textAlign="center">
                  <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                    <Iconly

                      name="Send"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    />
                  </Div>
                </Div>
                <li>
                  <Text className="mytitle" textWeight="600" textColor={`#252859`}>Car Hailing Apps and delivery apps</Text>
                </li>
                <p className="small">Drivers using your platform should have a financial discipline, let them save and invest.
                  using our API.</p>
              </Col>

              <Col>
                <Div bg="gray200" align="center" textAlign="center">
                  <Div className="icon_svg" bg="gray200" align="center" textAlign="center">
                    <Iconly

                      name="Activity"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    />
                  </Div>
                </Div>
                <li>
                  <Text className="mytitle" textWeight="600" textColor={`#252859`}> Social platforms</Text>
                </li>
                <p className='small'>Adding a digital investment wallet to a social platform can impact a lot of
                  people's financial discipline.</p>
              </Col>
            </Row>



          </ul>
          <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "heading" }}
          >Overview
          </Text>
          <Text tag="p">Cyanase offers a wide range of integration
            options just to make your life easy.</Text>

          <ul class="lists2">

            <li><p><span>Cyanase check-Out</span>  is a low-code payment
              integration that creates a customizable investment page so you can quickly collect payments
              on desktop and mobile devices. Checkout supports goal based investments
              and payments of over
              over twenty local payment methods. For a full list of Checkout features.<Tag
                onClick={
                  () => alert("This feature is under development")
                }
                bg={`#252859`}
                textColor="white"
                textSize="body"
              >
                Get started
              </Tag></p></li>

            <li><p><span>Cyanase Standard</span>  is a low-code payment
              integration that creates a customizable investment page so you can quickly collect payments on desktop and mobile devices. Checkout supports goal based investments and payments of over
              over twenty local payment methods. For a full list of Checkout features,
              
              <Link to="/started"><Tag
                bg={`#252859`}
                textColor="white"
                textSize="body"
              >
                Get started
              </Tag>
              </Link>


            </p> </li>

          </ul>

        </div></div>
    </Container>
  );
}

export default Home;
