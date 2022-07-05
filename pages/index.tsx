import type { NextPage } from 'next'
import Layout from '../components/layout'
import Intro from '../components/sections/Intro'

const Home: NextPage = () => {
    return (
        <>
            <Layout>

                {/* Intro section */}
                <Intro />

            </Layout>
        </>
    )
}

export default Home