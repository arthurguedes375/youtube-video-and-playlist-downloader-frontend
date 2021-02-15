import type { AppProps } from 'next/app'

import Head from 'next/head';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
            < GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp