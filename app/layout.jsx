// import { Footer, Layout, Navbar } from 'nextra-theme-docs'
// import { Banner, Head } from 'nextra/components'
// import { getPageMap } from 'nextra/page-map'
// import 'nextra-theme-docs/style.css'

// export const metadata = {
//   // Define your metadata here
//   // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// }

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
// const navbar = (
//   <Navbar
//     logo={<b>ISP Wiki</b>}
//     // ... Your additional navbar options
//   />
// )
// const footer = <Footer>MIT {new Date().getFullYear()} © Paul Palayur.</Footer>

// export default async function RootLayout({ children }) {
//   return (
//     <html
//       // Not required, but good for SEO
//       lang="en"
//       // Required to be set
//       dir="ltr"
//       // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
//       suppressHydrationWarning
//     >
//       <Head
//       // ... Your additional head options
//       >
//         {/* Your additional tags should be passed as `children` of `<Head>` element */}
//       </Head>
//       <body>
//         <Layout
//           banner={banner}
//           navbar={navbar}
//           pageMap={await getPageMap()}
//           docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
//           footer={footer}
//         //   toc={{
//         //     title: true
//         //   }}
//           // ... Your additional layout options
//         >
//           {children}
//         </Layout>
//       </body>
//     </html>
//   )
// }


/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s - Nextra'
  },
  description: 'Nextra: the Next.js site builder',
  applicationName: 'Nextra',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Nextra'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://nextra.site'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Nextra</b>{' '}
          <span style={{ opacity: '60%' }}>The Next Docs Builder</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/hEM84NMkRv"
    />
  )
  //const feedback = ()
//   const footer = <Footer>MIT {new Date().getFullYear()} © Paul Palayur.</Footer>
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={<Footer />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          feedback={{ content: 'Was this page helpful?'}}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}