import styled from "styled-components";


const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2.8rem 0;
    color: ${props => props.theme.colors.text};
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
                color: ${props => props.theme.colors.text};
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
            }
        }
    }
`

export const LinksDiv = styled.div`
    display: flex;
    gap: 4rem;
`

export default StyledNavbar;
