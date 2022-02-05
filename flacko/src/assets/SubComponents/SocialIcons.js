import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { LinkedIn, Github, Twitter, Instagram } from '../Components/AllSvgs'
import { DarkTheme } from '../../Components/Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body };
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1, 5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1 }}
            >
                <NavLink style={{ color: "inherit" }} target="_blank" tp={{ pathname: "https://github.com/rjhelm" }}>
                    <Github width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1, 5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.2 }}
            >
                <NavLink style={{ color: "inherit" }} target="_blank" tp={{ pathname: "https://twitter.com/ryan_j_dev" }}>
                    <Twitter width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1, 5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: "inherit" }} target="_blank" tp={{ pathname: "https://www.instagram.com/ryan_j_dev/" }}>
                    <Instagram width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1, 5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.6 }}
            >
                <NavLink style={{ color: "inherit" }} target="_blank" tp={{ pathname: "https://www.linkedin.com/in/ryjhelm/" }}>
                    <LinkedIn width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <Line color={props.theme}
                initial={{ height: 0 }}
                animate={{ height: '8rem' }}
                transition={{ type: "spring", duration: 1, delay: 0.8 }}
            />
        </Icons>
    )
}

export default SocialIcons;