import React, { useState } from 'react'
import styled, { css } from "styled-components";
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
import Smoothies from '../../../public/assets/GabrielsSmoothies.png'
import Linkly from '../../../public/assets/LinklyURLShortener.png'
import Space from '../../../public/assets/spacetours.png'
import SPHX from '../../../public/assets/Sphx.png'
import Shopster from '../../../public/assets/1920Shopster.png'
import DC from '../../../public/assets/1920DesignCircle.png'
import Crypto from '../../../public/assets/1920Crypto.png'
import Loop from '../../../public/assets/Loopstudios.jpeg'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion';


const Tabs = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0 3rem 0;
`

const Button = styled.h3<{ activeCat: string, cat: string }>`
    padding: .5rem 1rem;
    cursor: pointer;
    color: ${(props) => {
        if (props.activeCat == props.cat) {
            return props.theme.colors.bodyText
        } else {
            return '#767676'
        }
    }};

    &:hover {
        color: ${(props) => props.theme.colors.bodyText};
    }

    &:first-of-type {
        border-right: 2px solid ${(props) => props.theme.colors.bodyText};
    }
`



const Work: React.FunctionComponent = () => {
    const [activeCategory, setActiveCategory] = useState('frontend')

    return (
        <Container id='work'>

            {/* <SectionName>Work.</SectionName> */}

            <Header>Work.</Header>

            <Tabs>
                <Button
                    cat='frontend'
                    activeCat={activeCategory}
                    onClick={() => setActiveCategory('frontend')}>
                    Frontend
                </Button>
                <Button
                    cat='backend'
                    activeCat={activeCategory}
                    onClick={() => setActiveCategory('backend')}>
                    Backend
                </Button>
            </Tabs>


            {
                activeCategory == 'frontend' ? (
                    <ProjectCol>
                        <AnimatePresence>
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
                        </AnimatePresence>
                    </ProjectCol>
                ) : (
                    <ProjectCol>
                        <AnimatePresence>
                            <ProjectItem
                                image={Smoothies}
                                title="Gabriel's Smoothies"
                                details="Made with NodeJS, Express and MongoDB. For logged in users to create recipes, view them and delete the recipes. Implemented protected routes for certain pages and features using JSON Web Tokens and Web Cookies."
                                link="https://express-gabriels-smoothies.onrender.com"
                                alt="Gabriel's smoothies page"
                                color='skyblue'
                            />
                            <ProjectItem
                                image={Linkly}
                                title="Linkly URL Shortener"
                                details="Made with NodeJS, Express, EJS and MongoDB. A straightfoward application that allows a user to shorten a link by interacting with the backend API through the views. Also records in the database the number of times a specific short link has been used."
                                link="https://express-url-shortener-vrf3.onrender.com"
                                alt="Gabriel's smoothies page"
                                color='greypink'
                            />
                        </AnimatePresence>
                    </ProjectCol>
                )
            }

            {/* <p>
                Over the course of learning about web technologies, I took on a hands-on approach of taking a number of personal projects based on said tech. Here is a group of selected works that I have worked on recently. This list gets updated regularly as more projects are added into it
            </p> */}

        </Container >
    )
}

export default Work
