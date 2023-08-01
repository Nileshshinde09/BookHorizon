import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='no-scrollbar overflow-hidden bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 shadow-lg'>
      <Header className="absolute"/>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
