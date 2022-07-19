import type { NextPage } from 'next'
import Layout from '../components/layout'
import StyledHomePageContainer from '../components/styled/HomePage.styled'
import Intro from '../components/sections/Intro'



const Home: NextPage = () => {
    return (
        <>
            <Layout>

                <StyledHomePageContainer>
                    {/* Intro section */}
                    <Intro />

                </StyledHomePageContainer>

            </Layout>
        </>
    )
}

export default Home