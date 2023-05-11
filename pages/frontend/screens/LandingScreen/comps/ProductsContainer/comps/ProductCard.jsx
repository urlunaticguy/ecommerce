import Image from "next/image";
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductCard(props) {
    const [rating, setRating] = useState(0) // initial rating value

    const [image, setImage] = useState("/assets/images/sample_image.png")
    const [name, setName] = useState("Sample Name")
    const [price, setPrice] = useState("500")
    const [description, setDescription] = useState("Sample Description")

    useEffect(() => {
        setImage(props.product.image)
        setName(props.product.name)
        setPrice(props.product.price)
        setDescription(props.product.description)
    }, [props])

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
    return (
        <Link href={"/frontend/screens/ProductScreen/ProductScreen"} className=" w-[16rem] h-[20rem] rounded-xl p-2 flex flex-col hover:bg-slate-100 cursor-pointer">
            <Image width={256} height={256} src={image} />
            <div className=" flex flex-row justify-between items-center font-semibold">
                <h1>{name}</h1>
                <h1>{price}</h1>
            </div>
            <div className=" font-light text-[0.75rem] items-center flex justify-start">
                <h2>{description}</h2>
            </div>
            <div className=" flex flex-row">
                <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    size={1}
                    label
                    transition
                    fillColor='orange'
                    emptyColor='gray'
                    
                    className=' inline' // Will remove the inline style if applied
                />
            </div>
        </Link>
    )
}