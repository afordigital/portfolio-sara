import Head from 'next/head'

import Nav from '../components/Nav'
import Main from './main'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <div className='font-poppins'>
      <Head>
        <title>Sara Montagud - Portfolio</title>
      </Head>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}
