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
  padding-left: 2rem;
  text-align: left;
  position: relative;
`;

const Title = styled.h1`
  font-size: 7.8vw; /* Adjust font size based on viewport width */
  margin-bottom: 0.5rem;
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
`;

const Subtitle = styled.h2`
  font-size: 1.8vw; /* Adjust font size based on viewport width */
  font-weight: 500;
  line-height: 1;
  color: #555;
  position: absolute;
  right: 38vw;
  top: 35vw;

  & > span {
    display: block;
  }
`;

const DecorativeElement = styled.h3`
  font-size: 7vw; /* Adjust font size based on viewport width */
  font-weight: 700;
  line-height: 0.79;
  color: #000;
  opacity: 0.05;
  position: absolute;
  left: 2vw; /* Adjust positioning based on viewport width */
  top: 2vh; /* Adjust positioning based on viewport height */
  transform: rotate(90deg);
  width: 10vw; /* Adjust width based on viewport width */
  height: 35vh; /* Adjust height based on viewport height */
  
  & > span {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > span:nth-child(2) {
    opacity: 1;
  }
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