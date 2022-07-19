import React, { useContext } from 'react'
import { ThemePreferenceContext } from '../layout'
import { dark, light } from '../styled/theme/Theme.styled'
import StyledNavbar, { LinksDiv } from '../styled/blocks/navbar/Navbar.styled'

const Navbar: React.FunctionComponent = () => {

    const { handleThemeChange } = useContext(ThemePreferenceContext)


    return (
        <StyledNavbar>
            <p>Gabriel Abubakar.</p>

            <LinksDiv>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#connect">Connect</a></li>
                </ul>

                <div>
                    <button onClick={() => handleThemeChange(dark)}>
                        Dark
                    </button>
                    <button onClick={() => handleThemeChange(light)}>
                        Light
                    </button>
                </div>
            </LinksDiv>
        </StyledNavbar>
    )
}

export default Navbar