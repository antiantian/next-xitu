import Head from 'next/head'
export default ({ children }) =>
  <div style={{display: 'flex',
    width: '100%',
    height: '100%'}}>
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
   
        <link rel="icon" type="image/png" href="https://e-gold-cdn.xitu.io/static/favicons/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://e-gold-cdn.xitu.io/static/favicons/favicon-16x16.png" sizes="16x16"/>
        <link rel="manifest" href="https://e-gold-cdn.xitu.io/static/favicons/manifest.json"/>
        <link rel="mask-icon" href="https://e-gold-cdn.xitu.io/static/favicons/safari-pinned-tab.svg" color="#007fff"/>
        <link rel="shortcut icon" href="https://e-gold-cdn.xitu.io/static/favicons/favicon.ico"/>
        <meta name="msapplication-config" content="https://e-gold-cdn.xitu.io/static/favicons/browserconfig.xml" /> 
        <meta name="theme-color" content="#007fff" /> 
        <meta name="description" content="为设计师、程序员、产品经理每日发现优质内容。包含Android、前端、产品、设计、iOS、后端六大频道，每个频道内都有一到多个
        为你精心准备的优质内容源。"/> 
        <meta name="keywords" content="设计师,程序员,产品经理,内容,android,前端,设计,ios,后端,聚合,github,图片,工具,资源,库,文章,安卓,开发,开源"/> 
        <title>掘金酱</title>
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    {children}
  </div>