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
                    Hello there, I’m Gabriel a versatile and excellence driven software engineer committed to building digital products for the web that are accessible, functional and user-centric.
                </Paragraph>
                <Paragraph>
                    My primary technical language for the web is Javascript/Typescript and as such I have practical experience with frameworks and tools on the frontend including React, Next and Vue. I also have experience building and contribution to backend projects with NodeJS, Express.
                </Paragraph>
                <Paragraph>
                    For style presentation on the web I make use of frontend libraries that are expected of a modern day frontend web engineer including but not limited to CSS/SCSS, Styled Components and TailwindCSS.
                </Paragraph>
                <Paragraph>
                    I also endeavour to write tests for my code so as to increase code confidence and reduce debugging times by using Typescript for static testing, and React Testing Library/Jest for the testing of components and their functionalities
                </Paragraph>
                <Paragraph>
                    I have also worked personally with further concepts such as Web Accessibility, Site Optimization for Search Engines as well as Prototyping wireframes via products such as Figma and Adobe XD. Some of the other tools I make use of in my development workflow include Redux, Git, Rest and GraphQL APIs (Consumption), Framer Motion, GSAP.
                </Paragraph>
                <Paragraph>
                    Currently searching for opportunities at agile teams that foster a great environment for continuous personal and professional growth as well as working intensively with cutting-edge tech on interesting use cases where I am involved in the lifecycle of the digital products for the web.
                </Paragraph>


                <Button
                    href="https://docs.google.com/document/d/18lJt11IEQF1Zmas8BM8HMa5GFyBq36h4Fkf7U5PP8Tw/edit?usp=drive_link"
                    rel='noreferrer'>Resume
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z" fill="inherit" />
                    </svg>
                </Button>
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
