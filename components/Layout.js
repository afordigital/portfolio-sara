import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

import { useState } from 'react'

const Layout = ({ children }) => {
  const [openGallery, setOpenGallery] = useState(false)

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
