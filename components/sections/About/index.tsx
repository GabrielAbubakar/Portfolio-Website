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
                    Hi there, I’m Gabriel, a self taught front-end web developer based in Lagos, Nigeria.
                </Paragraph>
                <Paragraph>
                    I’m interested in creating user web experiences out of designs by writing as little and efficient code as possible so as to reduce load times thereby creating awesome site experiences.🚀🚀
                </Paragraph>
                <Paragraph>
                    I have been writing frontend code since 2020 and over time have acquired various skills that have advanced my development workflow.
                </Paragraph>
                <Paragraph>
                    These skills include competency in the building blocks of the web (HTML, CSS and Javascript), alongside other frontend frameworks and libraries such as React.js, Vue.js and Next.js.
                </Paragraph>
                <Paragraph>
                    I have also worked personally with further concepts such as Web Accessibility, Site Optimization for Search Engines as well as Prototyping wireframes via products such as Figma and Adobe XD.
                </Paragraph>
                <Paragraph>
                    I’m open to learning new web technologies in other to be able to work efficiently in diverse development teams.🙃
                </Paragraph>


                <Button
                    href="https://drive.google.com/file/d/14VcRPP-s5dN7OWu1Flyu-8rAs0NCFLLo/view?usp=sharing"
                    rel='noreferrer'>Resume</Button>
            </Content>

            <SectionName
                initial={{ opacity: 0 }}
                whileInView={{ opacity: .2, transition: { duration: 4 } }}
                viewport={{ once: true }}>
                About.
            </SectionName>

        </Container>
    )
}

export default About;