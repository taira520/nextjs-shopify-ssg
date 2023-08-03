import Head from 'next/head';
import { ReactNode } from 'react';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <Header />

            <div className='content'>{children}</div>

            <Footer />
        </div>
    );
};

export default Layout;