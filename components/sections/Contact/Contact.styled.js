import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from '../../styled/mediaqueries/device'


export const Container = styled.footer`
    position: relative;
    /* min-height: 100vh; */
    /* margin-bottom: 10rem; */

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
`

export const Body = styled.div`
    margin-top: 15rem;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15rem;
`

export const Flex2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    /* color: var(--color-text-grey); */
    font-family: 'Montserrat', sans-serif;

    @media ${devices.tablet} {
        flex-direction: column;
        align-items: center;
    }

    @media ${devices.mobileS} {
        font-size: .9rem;
    }

    p {
        color: ${(props) => props.theme.colors.footerLinks};

        @media ${devices.mobileL} {
            font-size: 0.8rem;
        }
    }
`

export const Content = styled.div`
    text-align: center;

    
    p {
        font-size: 1.875rem;
        /* font-size: 1.7rem; */
        margin-bottom: 1rem;

        @media ${devices.tablet} {
            font-size: 1.5rem;
        }

        @media ${devices.mobileL} {
            font-size: 1.1875rem;
        }
    }

    a {
        font-size: 6rem;
        color: ${(props) => props.theme.colors.primary};
        font-family: 'Nanum Myeongjo', serif;
        transition: all .2s;

        @media ${devices.tablet} {
            font-size: 3.75rem;
        }

        @media ${devices.mobileL} {
            font-size: 2.6875rem;
        }

        &:hover {
            /* color: lighten( $color-text-highlight, 5%); */
        }
    }
`

export const Socials = styled.div`

    @media ${devices.tablet} {
        margin-bottom: 5rem;
    }

    @media ${devices.mobileL} {
        font-size: 0.8rem;
        margin-bottom: 3.5rem;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.footerLinks};

        &:not(:last-of-type) {
            margin-right: 3rem;

            @media ${devices.mobileS} {
                margin-right: 2rem;
            }

        }

        &:hover {
            color: ${(props) => props.theme.colors.primary};
        }



    }
`