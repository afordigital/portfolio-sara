import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sara Montagud - Portfolio</title>
      </Head>
      <body className='dark:bg-[#1a202c] dark:text-gray-200'>
        <Nav />
        {children}
        <Footer />
      </body>
    </>
  )
}

export default Layout
