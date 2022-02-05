import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import PowerButton from '../../SubComponents/PowerButton/PowerButton';
// import LogoComponent from '../../SubComponents/LogoComponent/LogoComponent';
// import SocialIcons from '../../SubComponents/SocialIcons/SocialIcons';
// import LargeIcon from './AllSvgs'
// import Intro from './Intro/Intro';

const HomeContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    postition: relative;
    h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }    
`
const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`

const BLOG = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`

const WORK = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%, -50%) rotate(90deg);
    text-decoration: none;
    z-index: 1;
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const SKILLS = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`
const rotate = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child {
        animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child {
        display: ${props => props.click ? 'none' :'inline-block'  };
        padding: 1rem; 
    }
`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    background-color: #000;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`

const Home = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <HomeContainer>
            <DarkDiv click={click} />
            <Container>
                {/* <PowerButton /> */}
                {/* <LogoComponent /> */}
                {/* <SocialIcons /> */}
                
                <Center click={click}>
                    {/* <LargeIcon onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' /> */}
                    <span>click on me</span>
                </Center>

                <Contact target="_blank" to={{ pathname:"mailto:ryjhelm@gmail.com" }}>
                    <motion.h2
                        initial={{
                            y: 200,
                            transition: { type:'spring', duration: 1.5, delay: 1}
                        }}
                        animate={{
                            y: 0,
                            transition: { type:'spring', duration: 1.5, delay: 1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        Chat with me
                    </motion.h2>
                </Contact>
                <BLOG to='/blog'>
                    <motion.h2
                        initial={{
                            y: 200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        RyanJDev Blog
                    </motion.h2>
                </BLOG>
                <WORK to='/work' click={+click}>
                    <motion.h2
                        initial={{
                            y: 200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        Work/Projects
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT to='/about' click={+click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            About Me
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            Technical Skills
                        </motion.h2>
                    </SKILLS>
                </BottomBar>
            </Container>
            {/* {click ? <Intro click={click} /> : null } */}
        </HomeContainer>
    )
}

export default Home;
