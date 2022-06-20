// بسم الله والحمد لله والصلاة والسلام على رسول الله

import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
