import React from 'react';
import { Container, Text, Tag, Div } from "atomize";
import "../app.css";


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
            Here are soo e of th use cases of our API
            <br></br>
            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}>Investment products</Text></li>
            <p>Enables you  to add investing features to your mobile App such that people using your systems can
              can invest fast and securely</p>
            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}>Invest in Dollars</Text></li>
            <p>Enables your customers to safely invest in foreign currencies e.g
              saving their money in dollars</p>

            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}>Goal Based investing</Text></li>
            <p>Enables your customers to set their financial goals and invest to achieve them.</p>
            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}>Automated investments</Text></li>
            <p>Enables your customers to automatically save their money as soon as they earn. this is the fastest
              way to help them reach their financial freedom.</p>
          </ol>
          <ul class="lists">
            This investment API can be integrated in;
            <br></br>
            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}>Edutech platforms</Text></li>
            <p>To introduce investing to students such
              that they have a start point after school.</p>
            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}> Fintech platforms</Text></li>
            <p>To enable their customers access a wide
              range of investment products across the world.</p>

            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}>Car Hailing Apps and delivery apps</Text></li>
            <p>To enable their customers invest as soon as they earn top so as to
              promote their financial discipline.</p>

            <li><Text className="mytitle" textWeight="600" textColor={`#252859`}> Social platforms</Text></li>
            <p>To promote the financial discipline of their users .</p>
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
                bg={`#252859`}
                textColor="white"
                textSize="body"
              >
                Get started
              </Tag></p></li>

            <li><p><span>Cyanase Standard</span>  is a low-code payment
              integration that creates a customizable investment page so you can quickly collect payments on desktop and mobile devices. Checkout supports goal based investments and payments of over
              over twenty local payment methods. For a full list of Checkout features,<Tag
                bg={`#252859`}
                textColor="white"
                textSize="body"
              >
                Get started
              </Tag>


            </p> </li>

          </ul>

        </div></div>
    </Container>
  );
}

export default Home;
