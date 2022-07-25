import styled from "styled-components";
import { devices } from "./mediaqueries/device";
import { motion } from "framer-motion";

export const Header = styled.h2`
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 3.125rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.bodyText};

    @media ${devices.tablet} {
        margin-bottom: 2.5rem;
        font-size: 4.5rem;
    }

    @media ${devices.mobileL} {
        font-size: 3.5rem;
    }
`

export const SectionName = styled(motion.p)`
    position: absolute;
    top: 10rem;
    left: -10rem;
    font-size: 30rem;
    z-index: -10;
    text-shadow: 1rem 1rem 0 ${(props) => props.theme.colors.primary};
    overflow: hidden;

    -webkit-text-stroke: .2rem #999380;
    -webkit-text-fill-color: ${(props) => props.theme.colors.background};
`