import { AppProps } from 'next/app'
import Head from 'next/head'
import 'sanitize.css'
import '../styles/scss/style.scss'
import Layout from '../components/Layout'


const App = ({ Component, pageProps }: AppProps) => (

    <>
      <Head>
        <title />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>

)

export default App