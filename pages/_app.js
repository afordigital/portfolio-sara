import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from '../translation/es/global.json'
import global_en from '../translation/en/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ES',
  resources: {
    ES: {
      global: global_es
    },
    EN: {
      global: global_en
    }
  }
})

function MyApp ({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default MyApp
