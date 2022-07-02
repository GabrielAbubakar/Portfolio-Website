import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../styled/GlobalStyles'


const Layout = ({ children }: { children: any }) => {
    return (
        <>
            {/* SEO stuff in the head tag */}
            <Head>
                <title>Gabriel Abubakar : Frontend Developer</title>
                <meta name="description" content="Portfolio Site of Gabriel Abubakar" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="icon" href="😁" /> */}
            </Head>
            <GlobalStyle />

            {/* Output the children of that page */}
            {children}
        </>
    )
}

export default Layout;