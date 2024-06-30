import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import styled from "styled-components";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding: 0;
  text-align: left;
  position: relative;
`;

const Title = styled.h1`
  font-size: 7.8vw;
  margin: 0;
  line-height: 0.79;
  position: absolute;
  right: 15vw;
  top: 24.1vh;

  & > span {
    display: block;
  }

  & > span:nth-child(1) {
  }

  & > span:nth-child(2) {
  }

  & > span:nth-child(3) {
    text-align: right;
  }

  @media (max-width: 3100px) {
    font-size: 7.8vw;
    right: 15vw;
    top: 24.1vh;
  }

  @media (min-aspect-ratio: 308/170) {
    top: 20vh;
  }

  @media (min-aspect-ratio: 308/120) {
    top: 16vh;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/14) {
    font-weight: 900;
    font-size: 8.8vw;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/8) {
    font-weight: 900;
    font-size: 10vw;
    letter-spacing: -3px;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8vw;
  font-weight: 300;
  line-height: 1;
  color: #555;
  position: absolute;
  right: 40vw;
  top: 52.9vh;
  margin: 0;
  letter-spacing: -0.06vw;

  & > span {
    display: block;
  }

  @media (max-width: 3100px) {
    font-size: 1.8vw;
    right: 40vw;
    top: 52.9vh;
  }

  @media (min-aspect-ratio: 308/180) {
    top: 57vh;
  }

  @media (min-aspect-ratio: 308/170) {
    top: 55vh;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/14) {
    font-size: 2.8vw;
    right: 36.5vw;
    top: 45vh;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/12) {
    top: 50vh;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/10) {
    top: 54vh;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/8) {
    right: 42.5vw;
    letter-spacing: -2px;
  }
`;

const DecorativeElement = styled.h3`
  font-size: 480px;
  font-weight: 700;
  line-height: 0.79;
  margin: 0;
  color: rgba(0, 0, 0, 0.03);
  position: absolute;
  left: 6.5vw;
  top: 24.1vh;
  letter-spacing: -77px;
  transform: rotate(90deg) translate(-485px, -360px);
  /* height: 35vh; */

  & > span {
    position: absolute;
    /* top: 0;
    left: 0; */
  }

  & > span:nth-child(1) {
    /* left: -10.6vh; */
  }

  & > span:nth-child(2) {
    /* left: -10.6vh; */
    transform: translateX(466px);
    color: black;
  }

  @media (max-width: 2800px) {
    font-size: 400px;
    left: 4.5vw;
    letter-spacing: -57px;
    transform: rotate(90deg) translate(-420px, -360px);

    & > span:nth-child(1) {
      /* left: -7.1vh; */
    }

    & > span:nth-child(2) {
      /* left: 13.6vh; */
      transform: translateX(403px);
    }
  }

  @media (max-width: 2400px) {
    font-size: 360px;
    left: 3.5vw;
    letter-spacing: -52px;
    transform: rotate(90deg) translate(-375px, -360px);

    & > span:nth-child(1) {
      /* left: -4.7vh; */
    }

    & > span:nth-child(2) {
      /* left: 13.8vh; */
      transform: translateX(360px);
    }
  }

  @media (min-aspect-ratio: 308/170) {
    top: 20vh;
  }

  @media (max-width: 1920px) {
    font-size: 300px;
    left: 0.5vw;
    letter-spacing: -52px;
    transform: rotate(90deg) translate(-295px, -360px);

    & > span:nth-child(1) {
      /* left: -4.7vh; */
    }

    & > span:nth-child(2) {
      /* left: 13.8vh; */
      transform: translateX(282px);
    }
  }

  @media (max-width: 1820px) {
    left: 0.2vw;
  }

  @media (max-width: 1700px) {
    left: -0.5vw;
  }

  @media (max-width: 1550px) {
    left: -1vw;
  }

  @media (max-width: 1440px) {
    left: -2.2vw;
  }

  @media (max-width: 1300px) {
    left: -2.9vw;
  }

  @media (max-width: 1200px) {
    left: -4vw;
  }

  @media (max-width: 1100px) {
    left: -5vw;
  }

  @media (max-width: 1100px) {
    left: -6vw;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.9vw;
  font-weight: 300;
  line-height: 1;
  color: #555;
  position: absolute;
  left: 6.5vw;
  bottom: 4vh;
  margin: 0;

  & > span {
    display: block;
  }

  @media (max-width: 2800px) {
    left: 6.9vw;
  }

  @media (max-width: 2400px) {
    left: 7.5vw;
  }

  @media (max-width: 1920px) {
    font-size: 16px;
  }
`;

const LegalInfo = styled.div`
  font-size: 0.6vw;
  font-weight: 300;
  line-height: 1;
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 44.8vw;
  bottom: 4vh;
  margin: 0;
  display: flex;

  & > span {
    display: block;
  }

  & > span.dot-spacer {
    margin: 0 0.5vw;
  }

  @media (max-width: 1920px) {
    font-size: 11px;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/14) {
    left: 39.5vw;
  }

  @media (max-width: 1100px) and (min-aspect-ratio: 10/8) {
    left: 36vw;
  }
`;

const DebugBox = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #eeff0078;
`;

const DebugBoxTwo = styled.div`
  position: absolute;
  height: 200px;
  top: 50%;
  background-color: #6f00ff4b;
`;

const DebugBoxThree = styled.div`
  position: absolute;
  height: 100vh;
  width: 20px;
  top: 0;
  left: 6.5vw;
  background-color: #00ffdd4a;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContent>
        <Title>
          <span>VALLE</span>
          <span>SOFTWARE</span>
          <span>LABS</span>
        </Title>
        <Subtitle>
          <span>a future heavyweight</span>
          <span>in digital products</span>
        </Subtitle>
        <DecorativeElement>
          <span>VALLE</span>
          <span>L</span>
        </DecorativeElement>
        <ContactInfo>
          <span>// inquiries</span>
          <span>contact@vallesoftwarelabs.com</span>
        </ContactInfo>
        <LegalInfo>
          <span>Valle Software Labs AS</span>
          <span className="dot-spacer">•</span>
          <span>Org. nr: 933 356 078</span>
          <span className="dot-spacer">•</span>
          <span>Fredensborgveien 87A, 8003 BODØ, NORWAY</span>
        </LegalInfo>
        {/* <DebugBox
          style={{ top: 0, height: "24.5vh", width: "70vw", right: "55vw" }}
        />
        <DebugBox style={{ top: "24.5vh", height: "18.9vh", right: "45vw" }} />
        <DebugBox
          style={{
            top: "calc(24.5vh + 18.9vh)",
            height: "10.4vh",
            right: "50vw",
          }}
        />
        <DebugBox
          style={{
            top: "calc(24.5vh + 18.9vh + 10.4vh)",
            height: "4.5vh",
            right: "45vw",
          }}
        />
        <DebugBox
          style={{
            top: "calc(24.5vh + 18.9vh + 10.4vh + 4.5vh)",
            height: "41.6vh",
            right: "50vw",
          }}
        />
        <DebugBoxTwo style={{ left: "0", width: "6.4vw", top: "20vh" }} />
        <DebugBoxTwo style={{ left: "6.4vw", width: "10.4vw", top: "25vh" }} />
        <DebugBoxTwo
          style={{ left: "calc(6.4vw + 10.4vw)", width: "28vw", top: "31vh" }}
        />
        <DebugBoxTwo
          style={{
            left: "calc(6.4vw + 10.4vw + 28vw)",
            width: "39.7vw",
            top: "36vh",
          }}
        />
        <DebugBoxTwo
          style={{
            left: "calc(6.4vw + 10.4vw + 28vw + 39.7vw)",
            width: "15.6vw",
            top: "41vh",
          }}
        /> */}
        <DebugBoxThree />
      </MainContent>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap"
      rel="stylesheet"
    />
  </>
);
