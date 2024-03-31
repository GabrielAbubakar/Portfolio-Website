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
import DC from '../../../public/assets/1920DesignCircle.png'
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
                    title="Mdundo for Brands"
                    details="Redevelopment of a new design for an African music streaming platform. Made with NextJs and took Search Engine Optimizations in consideration in order to increase brand visibility on search engines."
                    link="https://mdundoforbrands.netlify.app/"
                    alt="Mdundo for brands page"
                    color='pink'
                />

                <ProjectItem
                    image={DC}
                    title="Design Cricle Global Services"
                    details="A contract for the development of a website writing web code in alignment with supplied design files on Figma. Made use of Nextjs and SCSS for the client site."
                    link="https://design-circle.vercel.app/"
                    alt="Design Circle page"
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
                    details="Made with NextJS, TailwindCSS and the CoinGecko API. Feeds a user calculated results based on their input and information from the crypto market api."
                    link="https://crypto-time-travel.vercel.app/"
                    alt="Crypto time travel home page"
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
