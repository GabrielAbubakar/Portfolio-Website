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

export const ProjectBox = styled(motion.div)`



    
    figure {
        padding: 4rem 9rem;
        border-radius: 1rem;
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
    }

    p {
        font-size: 1.2rem;
    }
`