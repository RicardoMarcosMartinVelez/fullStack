
import { useState } from "react"




const Carousel = () => {



    return (
        <section>
            <div className="flex justify-between ">
                <div className="bg-gray-400">
                    <img></img>
                    <h3 className="text-black">titulo 1</h3>
                </div>
                <div className="bg-red-600">
                    <img></img>
                    <h3 className="text-black">titulo 2</h3>
                </div>
                <div className="bg-blue-600">
                    <img></img>
                    <h3 className="text-black">titulo 3</h3>
                </div>
                <div className="bg-green-800">
                    <img></img>
                    <h3 className="text-black">titulo 4</h3>
                </div>

            </div>
            <button className="text-black">izq</button>
            <button className="text-black">der</button>
        </section>


    )
}

export default Carousel