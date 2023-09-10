import { Inter } from 'next/font/google'
import ShoppingCart from '@/components/SoppingCart/ShoppingCart'
import Carousel from '@/components/carousel/Carousel'

import { useReducer } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white min-h-screen '>
      
      <Carousel />
      {/* <ShoppingCart /> */}

    </main>
  )
}
