
import { useState } from "react"
import CarouselControls from "./CarouseControls"
import CarouselDots from "./CarouselDots"


const items = [{
    id: 1,
    image: "https://imagenes.elpais.com/resizer/xOE7Oeshes4HMCo0BjguULLDLdA=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4UZ7YMWXB5VGX2IEDT4VCLK7KU.jpg",
    text: "enlace 1",

}, {
    id: 2,
    image: "https://img.freepik.com/fotos-premium/hermosa-cordillera-refleja-ia-generativa-aguas-tranquilas_188544-9117.jpg",
    text: "enlace, descripcion 2",

}, {
    id: 3,
    image: "https://fondosmil.com/fondo/17009.jpg",
    text: "enlace, descripcion 3",

}, {
    id: 4,
    image: "https://wallpaperaccess.com/full/13190.jpg",
    text: "enlace, descripcion 4",

}, {
    id: 5,
    image: "https://phototravel.es/wp-content/uploads/viajar-etiopia.jpg",
    text: "enlace, descripcion 5",

}]

const Carousel = () => {


    const [activeIndex, setActiveIndex] = useState(2)

    //Funciones manejadoras

    const handleNext = () => {

        setActiveIndex(activeIndex < items.length - 1 ? activeIndex + 1 : 0);

    }
    const handlePrev = () => {

        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : items.length - 1)

    }

    const goToItem = (e) => setActiveIndex(e)

    return (
        <section className="pt-20 pb-20 w-full ">
            <div className=" h-[400px] w-full">

                <div style={{
                    background: `url(${items[activeIndex].image}) no-repeat 80% center/cover`,
                }}
                    className="flex justify-between bg-black h-full w-[90%] sm:w-[80%] xl:w-[70%] 2xl:w-[60%] items-center duration-300 relative m-auto rounded-lg overflow-auto">

                    <div className="bg-transparent hover:bg-black/50 absolute bottom-0 pl-[10%] w-full pb-7">
                        <a href="" className=" text-xl text-slate-100">{items[activeIndex].text}</a>
                    </div>

                    <CarouselControls
                        next={handleNext}
                        prev={handlePrev} />

                </div>

                <>
                    <CarouselDots
                        activeIndex={activeIndex}
                        data={items}
                        goToItem={goToItem} />
                </>

            </div>

        </section>

    )
}

export default Carousel