import type { NextPage } from 'next'
import Layout from '../components/layout'
import Container from '../components/styled/HomePage.styled'
import Intro from '../components/sections/Intro'
import About from '../components/sections/About'
import Work from '../components/sections/Work'
import Contact from '../components/sections/Contact'
import ToTopButton from '../components/topButton'



const Home: NextPage = () => {
    return (
        <>
            <Layout>

                <Container>
                    {/* Intro section */}
                    <Intro />

                    {/* About Section */}
                    <About />

                    {/* Work Section */}
                    <Work />

                    {/* Contact Section */}
                    <Contact />


                    <ToTopButton />

                </Container>

            </Layout>
        </>
    )
}

export default Home