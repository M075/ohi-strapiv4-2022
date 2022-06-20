import Head from 'next/head'
import Footer from './Footer'

export default function Layout({title, description, keywords, children}) {
    return (
        <div>
            <Head>
                <title>{title} | Ohi</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                
            </Head>
            {children}
        </div>
    )
}

Layout.defaultProps = {
    title: 'Ohi | A Central Marketplace for Home Industries',
    description: 'Purchase products from people in your area or from small businesses',
    keywords: 'sell from home, home industry, home industries around me, small businesses, online home industries'
}