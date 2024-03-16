import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header';
import Footer from "@/app/components/footer";
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
      <Footer/>
      </body>
    </html>
  )
}
