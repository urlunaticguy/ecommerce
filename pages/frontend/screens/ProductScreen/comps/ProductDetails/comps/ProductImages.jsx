import React, { useState, useEffect } from "react";
import Image from "next/image";

function ProductImages() {

  const images = [
    {
      src : "/assets/images/products/sample products/airpods_1.jpg"
    },
    {
      src : "/assets/images/products/sample products/airpods_2.jpg"
    },
    {
      src : "/assets/images/products/sample products/airpods.jpg"
    }
  ]

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeImageSource, setActiveImageSource] = useState(images[0].src)

  useEffect(() => {
    console.log("ACtive ImaGE CHANGED")
    console.log(`new value ${activeImageIndex}`)
  }, [activeImageIndex])

  

  let updateStateValue = (value) => {
    setActiveImageIndex(value)
    setActiveImageSource(images[value].src)
  }

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className=" w-[50%] flex flex-col items-center justify-start">
      <div className=" w-[100%] h-[22rem] relative p-4 rounded-t-xl bg-black">
        <Image
          fill
          src={activeImageSource}
          alt="alternate text"
          className=" object-contain scale-75 "
         />
      </div>
      
      <div className=" w-[100%] h-[8rem] relative rounded-b-xl flex flex-row justify-center items-center gap-12 bg-black">
        {images && 
          images.map((data, index) => (
            <div 
              key={index} 
              className={` ${index === activeImageIndex ? 'border-2 border-white' : 'border-0'} w-[6rem] h-[6rem] relative cursor-pointer`}
              onMouseOver={() => {updateStateValue(index)}}
            >
              <Image
                fill
                src={data.src}
                alt="alternate text"
                className=" object-contain"
               />
            </div>
          ))
        }
      </div>
    </div>);
}

export default ProductImages;
