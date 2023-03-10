import styled from "styled-components";
import { devices } from '../../styled/mediaqueries/device'
import { motion } from "framer-motion";


const Container = styled.section`
    margin-bottom: 10rem;
    position: relative;

    padding: 0 3.8rem;
    overflow-x: hidden;

    @media ${devices.laptop} {
        padding: 0 3rem;
    }

    @media ${devices.tablet} {
        padding: 0 2rem;
    }

    @media ${devices.mobileL} {
        padding: 0 1.4rem;
    }

    @media ${devices.laptopL} {
        width: 1440px;
        margin-inline: auto;
        padding: 0;
    }
`

export const Content = styled.article`
    width: 60%;

    @media ${devices.laptop} {
        width: 85%;
    }

    @media ${devices.tablet} {
        width: 100%;
    }
`

export const Paragraph = styled(motion.p)`
    font-size: 1.2375rem;
    margin-bottom: 1.4rem;
    line-height: 1.6;

    @media ${devices.tablet} {
        font-size: 1rem;
    }


`

export const Button = styled(motion.a)`
    color: ${(props) => props.theme.colors.buttonText};
    text-decoration: none;
    background-color:  ${(props) => props.theme.colors.primary};
    border-radius: .35rem;
    padding: .9rem 1.2rem;
    display: block;
    width: fit-content;
    margin-top: 2.5rem;
    font-weight: 700;

    &:hover {
        background-color: ${(props) => props.theme.colors.buttonBack};
        color: ${(props) => props.theme.colors.primary};

        svg {
            fill: ${(props) => props.theme.colors.primary};
        }
    }

    svg {
        fill: ${(props) => props.theme.colors.primary};
        margin-left: .5rem;
    }
`



export default Container