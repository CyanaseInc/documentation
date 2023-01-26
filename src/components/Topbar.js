import React from 'react';
import { Input, Icon, Row, Col, Div, Button, Text } from "atomize";

const Topbar = () => {
  return (
    <>
      <br></br>
      <Div className="topbar">
        <Row>
          <Col>
            <Input w="24rem"
              placeholder="Search documentation"
              suffix={
                <Icon
                  name="Search"
                  size="20px"
                  cursor="pointer"


                  pos="absolute"
                  top="50%"
                  right="1rem"
                  transform="translateY(-50%)"
                />
              }
            />
          </Col>
          <Col><a href="https://auth.cyanase.com"><Text m={{ t: "0.5rem" }}>Sign In</Text></a></Col>
          <Col>
            <a href="https://auth.cyanase.com/signup">

              <Button

                w="10rem"
                suffix={<Icon
                  name="LongRight"
                  size="16px"
                  color="white"
                  m={{ l: "1rem" }} />}
                shadow="3"
                hoverShadow="4"

              >
                Create account
              </Button>
            </a>

          </Col>
        </Row>
      </Div>
    </>
  );
}
export default Topbar;