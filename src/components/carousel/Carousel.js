
import { useState } from "react"
import CarouselItems from "./CarouselItems"

const items =[{
    id:1,
    image:"",
    text:"",

},{
    id:2,
    image:"",
    text:"",

},{
    id:3,
    image:"",
    text:"",

},{
    id:4,
    image:"",
    text:"",

}]


const Carousel = () => {

    // const [item, setItems] = useState(item)
    const [activeIndex, setActiveIndex] = useState(0)


    const hancleClick1 = () =>{
        let acumulado= -1
        setActiveIndex(acumulado)
        console.log(activeIndex)
    }
    const hancleClick2 = () =>{
        let acumulado = 1
        setActiveIndex( acumulado)
        console.log(activeIndex)
    }





    return (
        <section className="pt-20">
            <div className="flex justify-between ">

                {
                items.map((ele)=><CarouselItems key={ele.id}/>)
                }
                
                {/* <div className="bg-gray-400 w-full h-60">
                    <img></img>
                    <h3 className="text-black ">titulo 1</h3>
                </div>
                <div className="bg-red-600 w-full h-60">
                    <img></img>
                    <h3 className="text-black">titulo 2</h3>
                </div>
                <div className="bg-blue-600 w-full h-60">
                    <img></img>
                    <h3 className="text-black">titulo 3</h3>
                </div>
                <div className="bg-green-800 w-full h-60">
                    <img></img>
                    <h3 className="text-black">titulo 4</h3>
                </div> */}

            </div>
            <button onClick={hancleClick1} className="text-black">izq</button>
            <button onClick={hancleClick2} className="text-black">der</button>
        </section>


    )
}

export default Carousel