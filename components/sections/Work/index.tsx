import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import styled, { css } from "styled-components";
import { Header, SectionName } from '../../styled/Components.styled'
import {
    Container, ProjectCol, ProjectBox
    // FlexContainer,
    // ProjectContainer
} from './Work.styled'
import ProjectItem from '../../projectItem'
import { projects } from './projects'



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
    const [displayProjects, setDisplayProjects] = useState(projects.filter(item => item.platform == activeCategory))


    useEffect(() => {
        setDisplayProjects(projects.filter(item => item.platform == activeCategory))
    }, [activeCategory])

    return (
        <Container id='work'>

            {/* <SectionName>Work.</SectionName> */}

            <Header>Work.</Header>

            <Tabs>
                <Button
                    cat='frontend'
                    activeCat={activeCategory}
                    onClick={() => setActiveCategory('frontend')}>
                    frontend
                </Button>
                <Button
                    cat='backend'
                    activeCat={activeCategory}
                    onClick={() => setActiveCategory('backend')}>
                    backend
                </Button>
            </Tabs>


            {
                
                    <ProjectCol>
                        <AnimatePresence>
                            {
                                displayProjects.map((item, i) => (
                                    <ProjectItem
                                        key={i}
                                        image={item.imgSrc}
                                        title={item.name}
                                        details={item.description}
                                        alt={item.name}
                                        link={item.link}
                                        color={item.color}
                            />
                                ))
                            }
                        </AnimatePresence>
                    </ProjectCol>
            }

            {/* <p>
                Over the course of learning about web technologies, I took on a hands-on approach of taking a number of personal projects based on said tech. Here is a group of selected works that I have worked on recently. This list gets updated regularly as more projects are added into it
            </p> */}

        </Container >
    )
}

export default Work
