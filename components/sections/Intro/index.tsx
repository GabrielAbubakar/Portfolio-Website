import React from 'react'
import Navbar from '../../navbar'
import StyledIntroContainer, { StyledIntroHeader, StyledIntroName } from './Intro.styled'

const Intro: React.FunctionComponent = () => {

    return (
        <StyledIntroContainer id='intro'>

            <Navbar />


            <StyledIntroName initial={{ opacity: 0 }} animate={{ opacity: .2, transition: { duration: 4, delay: 2 } }}>

                &#160;gab <br />
                riel <br />
                &#160;abu <br />
                bakar <br />
            </StyledIntroName>


            <StyledIntroHeader initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} >
                <span className='brown'>Hi there🤙🏾.</span> I&apos;m <span className='white'>Gabriel,</span> <br /> a <span className='white'>frontend web developer</span> currently surviving <span className='brown'>Lagos, Nigeria</span> dedicated to creating awesome and accessible web experiences.
            </StyledIntroHeader>


        </StyledIntroContainer>
    )
}

export default Intro;