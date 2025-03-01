import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})


export default function App({ Component, pageProps }) {
  const router = useRouter()

  console.log(process.env.NODE_ENV)


  const [online, setOnline] = useState(typeof window !== "undefined" ? window.navigator.onLine : true);



  useEffect(() => {
    // create event handler
    const handleStatusChange = () => {
      setOnline(navigator.onLine);
    };

    // listen for online and ofline event
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    // clean up to avoid memory-leak
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);
  
  return (


    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="kQgHVRag90ieJU4XGORVTGxbkeIU1u2flRyRunOFDak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !online ?
          <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen flex justify-center items-center`}>
            <p className='text-red-700'>It looks like your offline &#128531;  Please check your internet connection  or try reloading</p>
            <p>{online}</p>
          </main> 
          :
          <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
              <p>{online}</p>
            {router.pathname === '/_error' ? '' : <Navbar />}


            <AnimatePresence mode='wait'>

            <Component key={router.asPath} {...pageProps} />
            
            </AnimatePresence>
             
              <Footer />
          </main>


      }
    </>
  )
}
