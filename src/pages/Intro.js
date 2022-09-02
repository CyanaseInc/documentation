import Tabs, { TabPane } from 'rc-tabs';
import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Text, Dropdown, Anchor,Div,Row, Col,Button, Icon, Tag,Container,Image } from "atomize";
import "../docs/app.css";
import '../node_modules/rc-tabs/assets/index.css';
import  Loan from "../productTabs/loans";
import Sacco from "../productTabs/sacco";
import Invest from "../productTabs/investments";
import About from "../productTabs/about";
import FadeInSection from '../productTabs/Fade';
 
const Intro = () => {


    function callback(e) {
    console.log(e);
  }

  return (
    <><section class="sectionapi" align="center">
         <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 'auto', lg: '7' }}>
              <Div p="1rem">
                <Div

                  textAlign="left"
                

          transition="custom"
                >
                 <Text textWeight="700"  textColor={`#0de4e4`} textSize="title">Frequently asked questions</Text>
                <br></br>
                  <Text  tag="h2" textSize="display2">
                  <FadeInSection>
         
          
          
                    <div >
What do you want to know about us?
                  
                    </div></FadeInSection>
                  
                  </Text>
                  <br></br>
                  <Text   textSize={`30px`}>
                  <FadeInSection>
                  Here, we answer a couple of questions our customers always ask.
                  if none of these answers you. kindly send your queries to <a>support@cyanase.com</a>

                  </FadeInSection>
                  </Text>

                  <br></br>
                  <Div d="flex" flexDir={{ xs: 'column', lg: 'row' }} align="center" justify={{ xs: "space-around", lg: "center" }}>

                  </Div>


                </Div>
              </Div>
            </Col>
            <Col>
              <Div p="1rem">

      <div class="help is-highlighted">?</div>
              </Div>
            </Col>
          </Row>
 </Container>
        </section>

           {/* Tab  section, */}
  <section class="section2">

      <Tabs tabPosition="left" defaultActiveKey="1" onChange={callback}>
        <TabPane tab="About us" key="1">
 <About/> 
        </TabPane>
        <TabPane tab="Investments" key="2">
         <Invest/>
        </TabPane>
        <TabPane tab="Loans" key="3">
         <Loan/>
        </TabPane>
         <TabPane tab="Group investments" key="4">
         <Sacco/>
        </TabPane>
      </Tabs>
      </section>
   {/* Tab  section, end */}
      </>
  );
};
  export default Intro;