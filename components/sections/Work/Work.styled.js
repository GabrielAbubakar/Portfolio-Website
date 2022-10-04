import styled, { css } from "styled-components";
import { devices } from '../../styled/mediaqueries/device'
import { motion } from "framer-motion";

export const Container = styled.section`
    margin-bottom: 10rem;
    position: relative;
    height: auto;
/* 
    & * {
        overflow: hidden;
    } */


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

    &>p {
        font-size: 1.4375rem;
        margin-bottom: 3rem;

        @media ${devices.tablet} {
            font-size: 1rem;
        }

        @media ${devices.mobileL} {
            font-size: 0.9375rem;
        }
    }
`

export const ProjectCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7rem;
    padding-top: 2rem;
    max-width: 900px;
    margin: 0 auto;
`

export const ProjectBox = styled(motion.div)`



    
    figure {
        padding: 4rem 9rem;
        border-radius: .5rem;
        margin-bottom: 1.6rem;

        @media ${devices.tablet} {
            padding: 3rem 6rem;
        }

        @media ${devices.mobileL} {
            padding: 1rem 4rem;
            border-radius: .8rem;
        }

        @media ${devices.mobileM} {
            padding: 1rem 2rem;
        }

        ${props => {
        // style switcher based on props
        switch (props.color) {
            case 'pink':
                return css`
                    background: linear-gradient(90deg, rgb(231, 223, 255) 0%, rgb(250, 172, 168) 100%, rgb(255, 169, 165) 100%);
                `
            case 'blue':
                return css`
                    background: linear-gradient(90deg, rgb(184, 220, 255) 16.15%, rgb(107, 187, 255) 100%);
                `
            case 'darkpink':
                return css`
                    background: linear-gradient(90deg, rgb(255, 226, 210) 0%, rgb(255, 189, 205) 100%);
                `
            case 'greypink':
                return css`
                    background: linear-gradient(90deg, rgb(218, 212, 236) 0%, rgb(218, 212, 236) 1%, rgb(243, 231, 233) 100%);
                `
            case 'whitepink':
                return css`
                    background: linear-gradient(90deg, rgb(243, 231, 233) 0%, rgb(227, 238, 255) 99%, rgb(227, 238, 255) 100%);
                `
            case 'skyblue':
                return css`
                    background: linear-gradient(90deg, rgb(231, 240, 253) 0%, rgb(172, 203, 238) 100%);
                `
            default:
                return css`
                    background: linear-gradient(90deg, rgb(243, 231, 233) 0%, rgb(227, 238, 255) 99%, rgb(227, 238, 255) 100%);
                `
        }
    }}

        &:hover {
            ${props => {
        switch (props.color) {
            case 'pink':
                return css`
                    box-shadow: 0 0 2rem rgb(231, 223, 255);
                `
            case 'blue':
                return css`
                    box-shadow: 0 0 2rem  rgb(107, 187, 255);
                `
            case 'darkpink':
                return css`
                    box-shadow: 0 0 2rem rgb(255, 189, 205);
                `
            case 'greypink':
                return css`
                    box-shadow: 0 0 2rem  rgb(243, 231, 233);
                `
            case 'whitepink':
                return css`
                    box-shadow: 0 0 2rem  rgb(227, 238, 255);
                `
            case 'skyblue':
                return css`
                    box-shadow: 0 0 2rem  rgb(172, 203, 238);
                `
            default:
                return css`
                    box-shadow: 0 0 2rem grey;
                `
        }
    }}
    }


    }

    h2 {
        margin-bottom: .5rem;
        font-size: 1.6rem;

        @media ${devices.tablet} {
            font-size: 1.4rem;
        }

    }

    p {
        font-size: 1.2rem;

        @media ${devices.tablet} {
            font-size: 1rem;
        }
    }
`