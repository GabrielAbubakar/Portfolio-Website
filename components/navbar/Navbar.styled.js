import styled from "styled-components";
import { motion } from "framer-motion";


const StyledNavbar = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    padding: 2.8rem 0;
    color: ${props => props.theme.colors.bodyText};
    font-family: 'Montserrat', sans-serif;



    p {
        font-size: 1.25rem;
        font-weight: 600;
        text-transform: uppercase;
    }



    ul {
        display: flex;
        gap: 1rem;

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
            }
        }
    }
`

export const LinksDiv = styled.div`
    display: flex;
    gap: 4rem;
`

export default StyledNavbar;
