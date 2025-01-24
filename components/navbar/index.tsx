import React, { useContext } from 'react'
import { ThemePreferenceContext } from '../layout'
import { dark, light } from '../styled/theme/Theme.styled'
import StyledNavbar, { LinksDiv } from './Navbar.styled'

const Navbar: React.FunctionComponent = () => {

    const { handleThemeChange } = useContext(ThemePreferenceContext)


    return (
        // <StyledNavbar initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <StyledNavbar>
            <p>Gabriel Abubakar.</p>

            <LinksDiv>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#footer">Connect</a></li>
                </ul>

                {/* <div>
                    <button onClick={() => handleThemeChange(dark)}>
                        Dark
                    </button>
                    <button onClick={() => handleThemeChange(light)}>
                        Light
                    </button>
                </div> */}
            </LinksDiv>
        </StyledNavbar>
    )
}

export default Navbar
