import Image from "next/image";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

export default function ProductCard(props) {
    const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
    return (
        <div className=" w-[16rem] h-[20rem] rounded-xl p-2 flex flex-col border-2 border-slate-300">
            <Image width={256} height={256} src={props.product.image} />
            <div className=" flex flex-row justify-between items-center font-semibold">
                <h1>{props.product.name}</h1>
                <h1>{props.product.price}</h1>
            </div>
            <div className=" font-light text-[0.75rem] items-center flex justify-start">
                <h2>{props.product.description}</h2>
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
        </div>
    )
}