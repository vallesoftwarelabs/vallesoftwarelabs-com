import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { GlobalStyles } from "../../styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

// Styled component with responsive styles
const MainContent = styled.main`
    display: flex;
    padding-left: 20vw;
    padding-top: 5vh;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;

    h1 {
        font-size: 4.4rem;
        line-height: 4.2rem;
        color: rgba(0, 0, 0, 0.82);
        margin-bottom: 70px;
    }

    p {
        font-size: 1.4rem;
        color: rgba(0, 0, 0, 0.72);
    }

    #inner-container {
        width: 40%;
        min-width: 370px;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        padding-left: 10vw;
        h1 {
            font-size: 3.2rem;
            margin-bottom: 50px;
        }
        p {
            font-size: 1.2rem;
        }
        #inner-container {
            width: 60%;
            min-width: auto;
        }
    }

    @media (max-width: 480px) {
        padding-left: 5vw;
        padding-right: 5vw;
        h1 {
            font-size: 2.4rem;
            margin-bottom: 30px;
        }
        p {
            font-size: 1rem;
        }
        #inner-container {
            width: 100%;
            min-width: auto;
        }
    }
`;

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainContent>
                <GlobalStyles />
                <div id="inner-container">
                    <h1>You've been invited to a Household!</h1>
                    <p>You just clicked a Household invite link, but you do not have the app installed yet.</p>
                    <p>Download the app on Google Play Store or App Store, and click the invite link again.</p>
                </div>
            </MainContent>
        </ThemeProvider>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Household invite</title>
