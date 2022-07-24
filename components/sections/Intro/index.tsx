import React from 'react'
import Navbar from '../../navbar'
import Container, { Header, Name } from './Intro.styled'

const Intro: React.FunctionComponent = () => {

    return (
        <Container id='intro'>

            <Navbar />


            <Name initial={{ opacity: 0 }} animate={{ opacity: .2, transition: { duration: 4, delay: 2 } }}>

                &#160;gab <br />
                riel <br />
                &#160;abu <br />
                bakar <br />
            </Name>


            <Header initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} >
                <span className='brown'>Hi there🤙🏾.</span> I&apos;m <span className='white'>Gabriel,</span> <br /> a <span className='white'>frontend web developer</span> currently surviving <span className='brown'>Lagos, Nigeria</span> dedicated to creating awesome and accessible web experiences.
            </Header>


        </Container>
    )
}

export default Intro;