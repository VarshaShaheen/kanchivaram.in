import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        <title>Kanchivaram.in</title>
    </head>
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
