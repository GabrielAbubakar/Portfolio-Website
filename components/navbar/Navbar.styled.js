import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../styled/mediaqueries/device";


const StyledNavbar = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    padding: 2.8rem 0;
    color: ${props => props.theme.colors.bodyText};
    /* font-family: 'Montserrat', sans-serif; */



    p {
        font-size: 1.25rem;
        font-weight: 600;
        text-transform: uppercase;

        @media ${devices.tablet} {
            font-size: 1rem;
        }

        @media ${devices.mobileL} {
            font-size: 0.9375rem;
        }
    }


    ul {
        display: flex;
        gap: 1rem;

        @media ${devices.mobileL} {
            display: none;
        }

        li {
            list-style-type: none;

            a {
                color: ${props => props.theme.colors.bodyText};
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;

                &:hover {
                    color: ${props => props.theme.colors.primary};
                }

                @media ${devices.tablet} {
                    font-size: 0.8125rem;
                }
            }
        }
    }
`

export const LinksDiv = styled.div`
    display: flex;
    gap: 3rem;
`

export default StyledNavbar;
