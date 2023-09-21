import { Inter } from "next/font/google";
import ShoppingCart from "@/components/SoppingCart/ShoppingCart";
import { useReducer, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen ">
      <ShoppingCart />
    </main>
  );
}
