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
  font-size: 7.8vw; /* Adjust font size based on viewport width */
  margin: 0;
  line-height: 0.79;
  position: absolute;
  right: 15vw;
  top: 12vw;

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
`;

const Subtitle = styled.h2`
  font-size: 1.8vw; /* Adjust font size based on viewport width */
  font-weight: 500;
  line-height: 1;
  color: #555;
  position: absolute;
  right: 38vw;
  top: 35vw;
  margin: 0;

  & > span {
    display: block;
  }

  @media (max-width: 3100px) {
    font-size: 1.8vw;
    right: 38vw;
    top: 52.9vh;
  }
`;

const DecorativeElement = styled.h3`
  font-size: 7vw; /* Adjust font size based on viewport width */
  font-weight: 700;
  line-height: 0.79;
  margin: 0;
  color: rgba(0,0,0,0.05);
  position: absolute;
  left: 2vw; /* Adjust positioning based on viewport width */
  top: 12vw; /* Align the top of the decorative element with the top of the title */
  transform: rotate(90deg);
  /* width: 10vw; */
  height: 35vh; /* Adjust height based on viewport height */
  
  & > span {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > span:nth-child(2) {
    color: black;
  }

  @media (max-width: 3100px) {
    font-size: 15.6vw;
    left: 2vw;
    top: -8vh;
    letter-spacing: -2.5vw;

    & > span:nth-child(2) {
      left: 20.9vh;
    }
  }
`;

const DebugBox = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  right: 50%;
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
  height: 53.4vh;
  width: 200px;
  top: 0;
  left: 10vw;
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
        <DebugBox style={{top: 0, height: '495px', left: 0, width: '70vw'}} />
        <DebugBox style={{top: '42vh', height: '237px'}} />
        <DebugBox style={{top: '57.8vh', height: '848px'}} />
        <DebugBoxTwo style={{left: '0', width: '6.4vw', top: '20vh'}} />
        <DebugBoxTwo style={{left: '6.4vw', width: '10.4vw', top: '25vh'}} />
        <DebugBoxTwo style={{left: 'calc(6.4vw + 10.4vw)', width: '28vw', top: '31vh'}} />
        <DebugBoxTwo style={{left: 'calc(6.4vw + 10.4vw + 28vw)', width: '39.7vw', top: '36vh'}} />
        <DebugBoxTwo style={{left: 'calc(6.4vw + 10.4vw + 28vw + 39.7vw)', width: '15.6vw', top: '41vh'}} />
        <DebugBoxThree />
      </MainContent>
    </ThemeProvider>
  );
}

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  </>
);
