import type { NextPage } from 'next'
import Layout from '../components/layout'
import StyledHomePageContainer from '../components/styled/HomePage.styled'
import Intro from '../components/sections/Intro'
import About from '../components/sections/About'



const Home: NextPage = () => {
    return (
        <>
            <Layout>

                <StyledHomePageContainer>
                    {/* Intro section */}
                    <Intro />


                    <About />

                </StyledHomePageContainer>

            </Layout>
        </>
    )
}

export default Home