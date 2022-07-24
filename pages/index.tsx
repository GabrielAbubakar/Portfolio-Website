import type { NextPage } from 'next'
import Layout from '../components/layout'
import Container from '../components/styled/HomePage.styled'
import Intro from '../components/sections/Intro'
import About from '../components/sections/About'



const Home: NextPage = () => {
    return (
        <>
            <Layout>

                <Container>
                    {/* Intro section */}
                    <Intro />


                    <About />

                </Container>

            </Layout>
        </>
    )
}

export default Home