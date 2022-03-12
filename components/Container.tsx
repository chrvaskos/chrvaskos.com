import Head from 'next/head'
import { useRouter } from 'next/router'
//Components
import Header from './Header'
import Footer from './Footer'
//Styles
import { ContainerBox } from 'styles/LayoutStyles'
//Types
import type { WithChildren } from 'types'

type ContainerProps = WithChildren<{
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string | null
}>

export const Container = (props: ContainerProps): JSX.Element => {
  const { children, ...customMeta } = props

  const router = useRouter()

  const meta = {
    title: 'Christoforidis Vasilis',
    description: 'Front-end developer and CSS enthusiast from Greece.',
    image: 'https://www.chrvaskos.com/images/banner.webp',
    type: 'website',
    ...customMeta,
  }

  return (
    <ContainerBox>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.chrvaskos.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.chrvaskos.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Christoforidis Vasilis" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chrvaskos" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <main id="skip">{children}</main>
      <Footer />
    </ContainerBox>
  )
}

export default Container
