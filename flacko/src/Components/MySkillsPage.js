import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes'
import { Design, Developer } from './AllSvgs'
import LogoComponent from '../SubComponents/LogoComponent';
import SocialIcons from '../SubComponents/SocialIcons';
import PowerButton from '../SubComponents/PowerButton';
import ParticleComponent from '../SubComponents/ParticleComponent';
import BigTitle from '../SubComponents/BigTitle';

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;
    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);
    ${Main}:hover &{
        &>*{
            fill:${props => props.theme.body};
        }
    }
    &>*:first-child{
        margin-right: 1rem;
    }
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;
    ${Main}:hover &{
        color:${props => props.theme.body};
    }
    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    ul,p{
        margin-left: 2rem;
    }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Design
                    </Title>
                    <Description>
                        I am a designer with a passion for creating beautiful and functional user interfaces. I have experience in designing for web, mobile, and desktop.
                    </Description>
                    <Description>
                        <strong>Filler</strong>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Description>
                    <Title>
                        <Developer width={40} height={40} /> Development
                        <Description>
                            I am a developer with a passion for creating beautiful and functional user interfaces. I have experience in designing for web, mobile, and desktop.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>

                            </p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p></p>
                        </Description>
                    </Title>
                </Main>
                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage;