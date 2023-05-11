import Heading from "./comps/Heading"
import ProductCard from "./comps/ProductCard"

export default function ProductsContainer() {
    const productsArray = [
        {
            name: "Airpods Pro",
            price: "$49.99",
            image: "/assets/images/products/airpodsPro.png",
            description: "Revolutionary sound in its smallest form"
        },
        {
            name: "Airpods Pro",
            price: "$49.99",
            image: "/assets/images/products/airpodsPro.png",
            description: "Revolutionary sound in its smallest form"
        },
        {
            name: "Airpods Pro",
            price: "$49.99",
            image: "/assets/images/products/airpodsPro.png",
            description: "Revolutionary sound in its smallest form"
        },
        {
            name: "Airpods Pro",
            price: "$49.99",
            image: "/assets/images/products/airpodsPro.png",
            description: "Revolutionary sound in its smallest form"
        },
        {
            name: "Airpods Pro",
            price: "$49.99",
            image: "/assets/images/products/airpodsPro.png",
            description: "Revolutionary sound in its smallest form"
        },
        {
            name: "Airpods Pro",
            price: "$49.99",
            image: "/assets/images/products/airpodsPro.png",
            description: "Revolutionary sound in its smallest form"
        },
        {
            name: "Airpods Pro",
            price: "$49.99",
            image: "/assets/images/products/airpodsPro.png",
            description: "Revolutionary sound in its smallest form"
        }
    ]
    return (
        <>
            <Heading />
            <div className=" w-full py-2 px-4 mt-2 flex flex-row flex-wrap gap-8 justify-between items-center">
                {productsArray.map((data, index) => (
                    <ProductCard key={index} product={data} />
                ))}
            </div>
        </>
    )
}