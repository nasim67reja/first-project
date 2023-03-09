import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My website description" />
        <meta name="keywords" content="some, keywords, for, my, website" />
        <title>The Franchise Advisor</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
