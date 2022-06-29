import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sara Montagud - Portfolio</title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
