import React from 'react'
import Navbar from '../../navbar'
import Container, { Header, Name } from './Intro.styled'

const Intro: React.FunctionComponent = () => {

    return (
        <Container id='intro'>

            <Navbar />


            <Name initial={{ opacity: 0 }} animate={{ opacity: .1, transition: { duration: 3, delay: 1 } }}>

                &#160;gab <br />
                riel <br />
                &#160;abu <br />
                bakar <br />
            </Name>


            <Header initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0, transition: { duration: .5 } }} >
                Hi there🤙🏾. I&apos;m <span className='white'>Gabriel,</span> <br /> a <span className='white'>software engineer</span> dedicated to creating awesome and accessible web experiences.
            </Header>


        </Container>
    )
}

export default Intro;
