import { Inter } from 'next/font/google'
import NavbarProject from '@/components/navbar/NavbarProject'
import Header from '@/components/header/Header'
import ShoppingCart from '@/components/SoppingCart/ShoppingCart'
import Carousel from '@/components/carousel/Carousel'
import Footer from '@/components/footer/Footer'

import { useReducer } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white min-h-screen '>
      <NavbarProject />
      <Header />
      <Carousel />
      <ShoppingCart />
      <Footer />
    </main>
  )
}
