import Product from "../SoppingCart/Product";
import Image from "next/image";
import { TYPES } from "@/Actions/ShoppingActions";




const Modal = ({isVisible, onClose, addToCart, id}) => {
    if (!isVisible) { return null;
        
    }
    const confirmAdd = (id) => {
        addToCart (id)
        onClose ()
        alert("producto agregado al carrito")
    
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 
    backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end'onClick={() => onClose()}>X</button>
        <div className='bg-orange-400 p-2 rounded'> 
     
            <button onClick={() => confirmAdd(id)}>Agregar al Carrito</button>
        </div>
        </div>
        </div>
  )
}

export default Modal