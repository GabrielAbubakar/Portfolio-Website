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

// export const FlexContainer = styled.div`
//         display: flex;
//         justify-content: space-between;
//         margin-right: 5rem;

//         @media ${devices.laptop} {
//             margin-right: 0;
//         }

//         @media ${devices.tablet} {
//             display: block;
//             margin-right: 0;
//         }
// `

// export const ProjectContainer = styled.div`
//     width: 43%;
//     display: flex;
//     flex-direction: column;
//     gap: 5rem;

//     &:last-of-type {
//         /* margin-top: 5rem; */
//     }

//     @media ${devices.tablet} {
//         width: 100%;
//     }
// `


// export const ProjectBox = styled(motion.div)`
//     /* margin-bottom: 7rem; */
//     transition: all .2s;

//     &:hover {
//         transform: translateY(-1%);
//     }

//     h3 {
//         font-size: 1.4375rem;
//         color: ${(props) => props.theme.colors.secondary};
//         text-transform: uppercase;
//         display: flex;
//         justify-content: space-between;

//         @media ${devices.tablet} {
//             font-size: 1.25rem;
//         }

//         @media ${devices.mobileL} {
//             font-size: 1.125rem;
//         }
//     }

//     p {
//         font-size: 1.25rem;

//         @media ${devices.laptop} {
//             font-size: 1.1rem;
//         }

//         @media ${devices.tablet} {
//             font-size: 1rem;
//         }

//         @media ${devices.mobileL} {
//             font-size: 0.875rem;
//         }
//     }

//     figure {
//         overflow: hidden;
//         margin-bottom: 1rem;
//     }

//     img {
//         max-width: 100%;
//         display: block;
//         height: auto;
//         transition: all 1s;
//         filter: grayscale(30%);

//         @media ${devices.tablet} {
//             filter: grayscale(0%);
//         }

//         &:hover {
//             filter: grayscale(0%);
//         }
//     }

//     a {
//         display: block;
//         text-decoration: none;
//         color: inherit;
//         transition: all .3s;
//     }

//     a:hover {
//         box-shadow: 1px 1px 15px rgba( #000000, .30);
//         //transform: scale(1.2);
//     }
// `

export const ProjectCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7rem;
    padding-top: 2rem;
    max-width: 900px;
    margin: 0 auto;
`

export const ProjectBox = styled.div`

    &:hover figure {
        ${props => {
        switch (props.color) {
            case 'pink':
                return css`
                            box-shadow: 0 0 2rem rgb(231, 223, 255);
                        `
            default:
                return css`
                            box-shadow: 0 0 2rem grey;
                        `
        }
    }}
    }

    
    figure {
        padding: 4rem 9rem;
        border-radius: 1rem;
        margin-bottom: 1.6rem;
        /* background: linear-gradient(90deg, rgb(231, 223, 255) 0%, rgb(250, 172, 168) 100%, rgb(255, 169, 165) 100%); */

        ${props => {
        switch (props.color) {
            case 'pink':
                return css`
                                background: linear-gradient(90deg, rgb(231, 223, 255) 0%, rgb(250, 172, 168) 100%, rgb(255, 169, 165) 100%);
                            `
            default:
                return css`
                            background-color: grey;
                        `
        }
    }}
    }

    h2 {
        margin-bottom: .5rem;
        font-size: 1.6rem;
    }

    p {
        font-size: 1.2rem;
    }
`