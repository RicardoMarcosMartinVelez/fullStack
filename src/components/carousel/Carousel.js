
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const items = [{
    id: 1,
    image: "https://imagenes.elpais.com/resizer/xOE7Oeshes4HMCo0BjguULLDLdA=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4UZ7YMWXB5VGX2IEDT4VCLK7KU.jpg",
    text: "enlace 1",
    description: "descripcion"

}, {
    id: 2,
    image: "https://img.freepik.com/fotos-premium/hermosa-cordillera-refleja-ia-generativa-aguas-tranquilas_188544-9117.jpg",
    text: "enlace 2",
    description: "descripcion 2"
}, {
    id: 3,
    image: "https://fondosmil.com/fondo/17009.jpg",
    text: "enlace 3",
    description: "descripcion 3"
}, {
    id: 4,
    image: "https://wallpaperaccess.com/full/13190.jpg",
    text: "enlace 4",
    description: "descripcion 4"
}, {
    id: 5,
    image: "https://phototravel.es/wp-content/uploads/viajar-etiopia.jpg",
    text: "enlace 5",
    description: "descripcion 5"
}]

const CarouseL = () => {




    return (
        <section className="pt-20 pb-20 w-full  ">

            <Carousel className="w-[60%] min-w-[400px] m-auto " infiniteLoop showThumbs={false} interval={5000} transitionTime={500} showStatus={false}>
                {items.map(ele =>
                    <div key={ele.id} className=" relative h-[450px] rounded-2xl shadow-lg">
                        <img className=" h-[100%] object-cover " src={ele.image}></img>
                        <div className="w-full h-[15%] bg-black/10 flex justify-start hover:bg-black/40 bottom-0  absolute">
                            <a className="text-white pl-9 text-xl" href={ele.text}>{ele.text}</a>
                        </div>

                    </div>)}

            </Carousel>

        </section>
    )
}

export default CarouseL