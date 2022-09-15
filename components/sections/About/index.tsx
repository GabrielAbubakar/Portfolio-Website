import { once } from 'events'
import React from 'react'
import { Header, SectionName } from '../../styled/Components.styled'
import Container, { Button, Content, Paragraph } from './About.styled'

const About: React.FunctionComponent = () => {

    return (
        <Container id='about'>

            <Header>About.</Header>

            <Content>
                <Paragraph>
                    Hello there, I’m Gabriel a versatile and excellence driven front-end web engineer committed to building digital products for the web that are accessible, functional and user-centric.
                </Paragraph>
                <Paragraph>
                    My primary technical language for the web is Javascript and as such I have practical experience with frontend frameworks including React, Next and Vue.
                </Paragraph>
                <Paragraph>
                    For style presentation on the web I make use of frontend libraries that are expected of a modern day frontend web engineer including but not limited to CSS/SCSS, Styled Components and TailwindCSS.
                </Paragraph>
                <Paragraph>
                    I also endeavoue to write tests for my code so as to increase code confidence and reduce debugging times by using Typescript for static testing, and React Testing Library/Jest for the testing of components and their functionalities
                </Paragraph>
                <Paragraph>
                    I have also worked personally with further concepts such as Web Accessibility, Site Optimization for Search Engines as well as Prototyping wireframes via products such as Figma and Adobe XD. Some of the other tools I make use of in my development workflow include Redux, Git, Rest and GraphQL APIs (Consumption), Framer Motion, GSAP.
                </Paragraph>
                <Paragraph>
                    I am open to working at agile companies that fosters a great environment for continuous personal and professional growth as well working intesively with cutting-edge tech on interesting use cases where I am involved in the lifecycle of the digital products for the web.
                </Paragraph>


                <Button
                    href="https://drive.google.com/file/d/14VcRPP-s5dN7OWu1Flyu-8rAs0NCFLLo/view?usp=sharing"
                    rel='noreferrer'>Resume</Button>
            </Content>

            <SectionName
                initial={{ opacity: 0 }}
                whileInView={{ opacity: .1, transition: { duration: 4 } }}
                viewport={{ once: true }}>
                About.
            </SectionName>

        </Container>
    )
}

export default About;