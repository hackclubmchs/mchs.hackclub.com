import Head from 'next/head'
import theme from '../lib/theme'

const Meta = ({
  title = 'Hack Club MCHS',
  description = 'Welcome to Hack Club at Middle College High School!',
  image = '/card.png',
  url = 'https://mchs.hackclub.com/'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content={theme.colors.primary} />
    <meta name="theme-color" content={theme.colors.primary} />
    <link rel="icon" href="/favicon.svg" />
  </Head>
)

export default Meta