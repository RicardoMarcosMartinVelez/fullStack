<<<<<<< HEAD
import { Inter } from 'next/font/google'
import NavbarProject from '@/components/navbar/NavbarProject'
import Header from '@/components/header/Header'
import ShoppingCart from '@/components/SoppingCart/ShoppingCart'
import Carousel from '@/components/carousel/Carousel'
import Footer from '@/components/footer/Footer'
=======
import { Inter } from "next/font/google";
import ShoppingCart from "@/components/SoppingCart/ShoppingCart";
import { useReducer, useState } from "react";
>>>>>>> shoppingcart

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<<<<<<< HEAD
    <main className='bg-white min-h-screen '>
      <NavbarProject />
      <Header />
      <Carousel />
      <ShoppingCart />
      <Footer />
=======
    <main className="bg-slate-100 min-h-screen ">
      <ShoppingCart />
>>>>>>> shoppingcart
    </main>
  );
}
