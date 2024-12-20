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
import { DisabledButton, MoreButton, TabsButton, TabsRow } from './components.styled'

const Work: React.FunctionComponent = () => {
    const [activeCategory, setActiveCategory] = useState('frontend')
    const [displayProjects, setDisplayProjects] = useState(projects.filter(item => item.platform == activeCategory))
    const [visibleCount, setVisibleCount] = useState(4)


    useEffect(() => {
        setDisplayProjects(projects.filter(item => item.platform == activeCategory))
    }, [activeCategory])

    return (
        <Container id='work'>

            {/* <SectionName>Work.</SectionName> */}

            <Header>Work.</Header>

            <TabsRow>
                <TabsButton
                    cat='frontend'
                    activeCat={activeCategory}
                    onClick={() => {
                        setActiveCategory('frontend')
                        setVisibleCount(4)
                    }}>
                    frontend
                </TabsButton>
                <TabsButton
                    cat='backend'
                    activeCat={activeCategory}
                    onClick={() => {
                        setActiveCategory('backend')
                        setVisibleCount(4)
                    }}>
                    backend
                </TabsButton>
            </TabsRow>

            {/* <p>visible count: {visibleCount}</p>
            <p>display projects: {displayProjects.length}</p>
            <p>{visibleCount >= displayProjects.length && 'true'}</p> */}

            {
                <ProjectCol>
                    <AnimatePresence>
                        {
                            displayProjects.slice(0, visibleCount).map((item, i) => (
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


            <TabsRow>
                {
                    visibleCount >= displayProjects.length == true ? (
                        <DisabledButton disabled>
                            No More Projects
                        </DisabledButton>
                    ) : (
                        <MoreButton onClick={() => setVisibleCount((prevCount) => prevCount + 2)}>
                            View More
                        </MoreButton>
                    )
                }

            </TabsRow>


            {/* <p>
                Over the course of learning about web technologies, I took on a hands-on approach of taking a number of personal projects based on said tech. Here is a group of selected works that I have worked on recently. This list gets updated regularly as more projects are added into it
            </p> */}

        </Container >
    )
}

export default Work
