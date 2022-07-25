import React from 'react'
import { Header, SectionName } from '../../styled/Components.styled'
import { Container, FlexContainer, ProjectContainer } from './Work.styled'
import ProjectItem from '../../projectItem'
import Todo from '../../../public/assets/TodoApp.png'
import LearnLaw from '../../../public/assets/learnlaw.png'
import Space from '../../../public/assets/spacetours.png'
import SPHX from '../../../public/assets/Sphx.png'
import Shopster from '../../../public/assets/Scandiweb.png'
import Loop from '../../../public/assets/Loopstudios.jpeg'



const Work: React.FunctionComponent = () => {
    return (
        <Container id='work'>

            {/* <SectionName>Work.</SectionName> */}

            <Header>Work.</Header>
            <p>
                Over the course of learning about web technologies, I took on a hands-on approach of taking a number of personal projects based on said tech. Here is a group of selected works that I have worked on recently. This list gets updated regularly as more projects are added into it
            </p>

            <FlexContainer>

                <ProjectContainer>
                    <ProjectItem
                        image={Todo} title="Todo App Tracker" details="Made with React.js functional components and hooks. Also uses the LocalStorage API to persist todo data on page refresh" link="https://todoapptracker.netlify.app/" alt="Todo App page"
                    />

                    <ProjectItem image={LearnLaw} title="Learn Nigerian Law" details="A live service providing educational materials on the Nigerian Legal System as taught in Nigerian schools. Created in Next.js and in collaboration with another developer to leverage the SEO, prerendering and multipage capabilities of Next.js" link="https://www.learnnigerianlaw.com/" alt="Learn Law home page" />

                    <ProjectItem image={Loop} title="Loopstudios" details="Made with the building blocks of the web (HTML, CSS and JS), a landing page project for a fictional VR firm." link="https://loopstudio-gabeabu.netlify.app/" alt="Loopstudios page" />
                </ProjectContainer>

                <ProjectContainer>
                    <ProjectItem image={Shopster} title="Shopster (Work in Progress)" details="An ecommerce web app leveraging the powerful state management capabilities of React-Redux and fetching the data from a local GraphQL server. Complete with cart management, local storage of cart data, and dynamic product routes." link="https://github.com/GabrielAbubakar/scandiweb-shopping-app" alt="Scandiweb page" />

                    <ProjectItem image={Space} title="Space Tours" details="The home page of a fictional tourist service. Made with the Next.js framework to leverage its multipage and prerendering capabilities" link=" https://spacetourism-gabeabu.netlify.app" alt="Spacetours page" />

                    <ProjectItem image={SPHX} title="SPHX Landing" details="Landing page for a fictional furniture shopping store and a section containing filtered products. React framework for creating the project" link="https://shpx-landing.netlify.app/" alt="SPHX Page" />
                </ProjectContainer>
            </FlexContainer>

        </Container>
    )
}

export default Work