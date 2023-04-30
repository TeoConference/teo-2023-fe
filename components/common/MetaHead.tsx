import Head from 'next/head'

const MetaHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>모두에게 열려있는 컨퍼런스 | 테오콘-TeoConf23</title>
      <link rel="icon" href="images/favicon.ico" />
      <meta
        name="description"
        content="모두에게 열려있는 컨퍼런스, 테오콘-TeoConf"
      />
      {/* Facebook Meta Tags  */}
      <meta property="og:title" content="코듀온" />
      <meta property="og:url" content={'https://teo-2023-fe.vercel.app/'} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="images/logo.png" />
      <meta
        property="og:description"
        content="모두에게 열려있는 컨퍼런스, 테오콘-TeoConf"
      />
      {/* Twitter Meta Tags  */}
      <meta name="twitter:card" content="images/logo.png" />
      <meta
        property="twitter:url"
        content={'https://teo-2023-fe.vercel.app/'}
      />
      <meta name="twitter:title" content="코듀온" />
      <meta
        name="twitter:description"
        content="모두에게 열려있는 컨퍼런스, 테오콘-TeoConf"
      />
      <meta name="twitter:image" content="/images/logo.png" />
    </Head>
  )
}

export default MetaHead
