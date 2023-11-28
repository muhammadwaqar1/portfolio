import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './(component)/navbar/navbar'
import Footer from './(component)/footer/footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}