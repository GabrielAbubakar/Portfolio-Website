import React from 'react'
import { Header, SectionName } from '../../styled/Components.styled'
import {
    Container, ProjectCol, ProjectBox
    // FlexContainer,
    // ProjectContainer
} from './Work.styled'
import ProjectItem from '../../projectItem'
import Mdundo from '../../../public/assets/1920Mdundo.png'
import Todo from '../../../public/assets/1920Todo.png'
import LearnLaw from '../../../public/assets/1920LearnLaw.png'
import Space from '../../../public/assets/spacetours.png'
import SPHX from '../../../public/assets/Sphx.png'
import Shopster from '../../../public/assets/1920Shopster.png'
import Crypto from '../../../public/assets/1920Crypto.png'
import Loop from '../../../public/assets/Loopstudios.jpeg'
import Image from 'next/image'



const Work: React.FunctionComponent = () => {
    return (
        <Container id='work'>

            {/* <SectionName>Work.</SectionName> */}

            <Header>Work.</Header>
            <ProjectCol>

                <ProjectItem
                    image={Mdundo}
                    title="Todo App Tracker"
                    details="Made with React.js functional components and hooks. Also uses the LocalStorage API to persist todo data on page refresh"
                    link="https://todoapptracker.netlify.app/"
                    alt="Todo App page"
                    color='pink'
                />

                <ProjectItem
                    image={Shopster}
                    title="Shopster App"
                    details="An ecommerce web app leveraging the powerful state management capabilities of React-Redux and fetching the data from a GraphQL server. Complete with cart management, local storage of cart data, and dynamic product routes. Fully tested with React Testing Library and Jest."
                    link="https://shopster-app.vercel.app/"
                    alt="Scandiweb page"
                    color='blue'
                />

                <ProjectItem
                    image={LearnLaw}
                    title="Learn Nigerian Law"
                    details="A live service providing educational materials on the Nigerian Legal System as taught in Nigerian schools. Created in Next.js and in collaboration with another developer to leverage the SEO, prerendering and multipage capabilities of Next.js"
                    link="https://www.learnnigerianlaw.com/"
                    alt="Learn Law home page"
                    color='darkpink'
                />

                <ProjectItem
                    image={Crypto}
                    title="Crypto Time Travel"
                    details="A live service providing educational materials on the Nigerian Legal System as taught in Nigerian schools. Created in Next.js and in collaboration with another developer to leverage the SEO, prerendering and multipage capabilities of Next.js"
                    link="https://www.learnnigerianlaw.com/"
                    alt="Learn Law home page"
                    color='greypink' />

                <ProjectItem
                    image={Todo}
                    title="Todo App Tracker"
                    details="Made with React.js functional components and hooks. Also uses the LocalStorage API to persist todo data on page refresh"
                    link="https://todoapptracker.netlify.app/"
                    alt="Todo App page"
                    color='skyblue'
                />


            </ProjectCol>


            {/* <p>
                Over the course of learning about web technologies, I took on a hands-on approach of taking a number of personal projects based on said tech. Here is a group of selected works that I have worked on recently. This list gets updated regularly as more projects are added into it
            </p> */}

        </Container>
    )
}

export default Work