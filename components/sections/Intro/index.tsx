import React, { useContext } from 'react'
import { ThemePreferenceContext } from '../../layout'
import { blue, green, pink } from '../../styled/theme/Theme.styled'

const Intro: React.FunctionComponent = () => {

    const { handleThemeChange } = useContext(ThemePreferenceContext)

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => handleThemeChange(pink)}>
                Click
            </button>
            <button onClick={() => handleThemeChange(green)}>
                Click
            </button>
        </div>
    )
}

export default Intro;