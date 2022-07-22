import styled from "styled-components";
import { motion } from "framer-motion";


const StyledIntroContainer = styled.div`
    position: relative;
    height: 100vh;
    margin-bottom: 10rem;


`

export const StyledIntroName = styled(motion.pre)`
        position: absolute;
        top: 4rem;
        right: 0;
        font-family: sans-serif;
        font-size: 14rem;
        font-weight: 600;
        line-height: 9rem;
        transform: translateX(300px);
        text-shadow: 1rem 1rem 0 #999380;
        z-index: -1;

        -webkit-text-stroke: .2rem #999380;
        -webkit-text-fill-color: ${(props) => props.theme.colors.background};
`

export const StyledIntroHeader = styled(motion.h1)`
    color: ${(props) => props.theme.colors.headerText};
    position: absolute;
    bottom: 0;
    width: 70%;
    font-size: 2.5625rem;
    font-weight: 400;
    position: absolute;
    bottom: 7rem;

    .brown {
        color: ${(props) => props.theme.colors.primary};
        /* color: blue; */
    }

    .white {
        color: ${(props) => props.theme.colors.headerTextHighlight1};
    }
`

export default StyledIntroContainer;
