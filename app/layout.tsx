import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { Bounce, ToastContainer } from 'react-toastify'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Kasa Ao',
  description: 'Oi!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={GeistSans.className}>
      <body>
        <>{children}</>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  )
}
