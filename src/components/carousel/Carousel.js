
import { useState } from "react"
import CarouselItems from "./CarouselItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons"

const items = [{
    id: 1,
    image: "https://imagenes.elpais.com/resizer/xOE7Oeshes4HMCo0BjguULLDLdA=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4UZ7YMWXB5VGX2IEDT4VCLK7KU.jpg",
    text: "imagen 1",

}, {
    id: 2,
    image: "https://img.freepik.com/fotos-premium/hermosa-cordillera-refleja-ia-generativa-aguas-tranquilas_188544-9117.jpg",
    text: "imagen 2",

}, {
    id: 3,
    image: "https://fondosmil.com/fondo/17009.jpg",
    text: "imagen 3",

}, {
    id: 4,
    image: "https://wallpaperaccess.com/full/13190.jpg",
    text: "imagen 4",

}, {
    id: 5,
    image: "https://phototravel.es/wp-content/uploads/viajar-etiopia.jpg",
    text: "imagen 5",

}]

const Carousel = () => {

    // const [item, setItems] = useState(item)
    const [activeIndex, setActiveIndex] = useState(2)


    const handleNext = () => {


        setActiveIndex(activeIndex < items.length - 1 ? activeIndex + 1 : 0);


        console.log(activeIndex)
    }
    const handlePrev = () => {



        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : items.length - 1)


        console.log(activeIndex)
    }

    return (
        <section className="pt-20 pb-20 w-full ">
            <div className=" h-[400px] w-full">
                <div style={{
                    background: `url(${items[activeIndex].image}) no-repeat 80% center/cover`,
                }}
                    className="flex justify-between bg-black h-full w-[90%] sm:w-[80%] xl:w-[70%] 2xl:w-[60%] items-center duration-500 relative m-auto rounded-lg  ">
                    <a href="" className="absolute bottom-0 pl-[10%] pb-7 text-xl">{items[activeIndex].text}</a>
                    <div onClick={handlePrev} className=" ml-3 rounded-full bg-black/20 / text-xl  ">

                        <FontAwesomeIcon className="cursor-pointer p-1" icon={faAnglesLeft} size="xl" style={{ "--fa-primary-color": "#7f8b9f", "--fa-secondary-color": "#e70d0d", }} />

                    </div>

                    <div onClick={handleNext} className="mr-3 rounded-full bg-black/20 text-xl">

                        <FontAwesomeIcon className="cursor-pointer p-1" icon={faAnglesRight} size="xl" style={{ "--fa-primary-color": "#7f8b9f", "--fa-secondary-color": "#adadae", }} />

                    </div>

                </div>
            </div>

        </section>

    )
}

export default Carousel