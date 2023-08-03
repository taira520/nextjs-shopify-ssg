import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    {/* 1: Google Tag Manager ---------------------------- */}
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WKJC79D');`,
                    }}/>
                    {/* -------------------------------------------------- */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    {/* 2: Google Tag Manager ---------------------------- */}
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKJC79D"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}/>
                    {/* -------------------------------------------------- */}
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
};