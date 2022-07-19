import React, { useContext } from 'react'
import { ThemePreferenceContext } from '../../layout'
import { dark, light } from '../../styled/theme/Theme.styled'
import Navbar from '../../navbar'

const Intro: React.FunctionComponent = () => {

    const { handleThemeChange } = useContext(ThemePreferenceContext)

    return (
        <>
            <Navbar />
            <h1>Home Page</h1>
            <button onClick={() => handleThemeChange(dark)}>
                Click
            </button>
        </>
    )
}

export default Intro;