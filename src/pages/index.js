import { Inter } from 'next/font/google'
import ShoppingCart from '@/components/SoppingCart/ShoppingCart'

import { useReducer } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <ShoppingCart/>
    </main>
  )
}
