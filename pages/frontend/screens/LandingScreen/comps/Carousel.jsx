import Image from "next/image";
import { useEffect, useState } from "react";

export default function LandingCarousel() {
    const imgPaths = ["/assets/images/Thomas_Shelby.jpg", "/assets/images/grace.jpg", "/assets/images/arthur_shelby.jpg"]
    const [counter, setCounter] = useState(0)
    const [imgSrc, setImgSrc] = useState(imgPaths[counter])

    let changeImageOnLeftArrowClick = async () => {
        if (counter == 0) {
            console.log("Nothing will happen.")
        } else if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    let changeImageOnRightArrowClick = async () => {
        if (counter == imgPaths.length - 1) {
            console.log("Nothing will happen.")
        } else if (counter < imgPaths.length - 1 ) {
            setCounter(counter + 1)
        }
    }

    useEffect(() => {
        console.log(`Counter is changed to ${counter}`)
        setImgSrc(imgPaths[counter])
    }, [counter])

    useEffect(() => {
    }, [])

    return (
        <div className=" relative w-full h-[24rem] 2xl:h-[32rem] mt-4 flex flex-row items-center">
            <div>
                {/* left chevron */}
                <svg onClick={() => {changeImageOnLeftArrowClick()}} className=" bg-slate-200 fill-black rounded-full px-4 py-3 w-12 left-4 -mt-4 absolute hover:bg-slate-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </div>
            <div className=" ">
                {/* right chevron */}
                <svg onClick={() => {changeImageOnRightArrowClick()}} className=" bg-slate-200 fill-black rounded-full px-4 py-3 w-12 right-4 -mt-6 absolute hover:bg-slate-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
            </div>
            <Image alt="some text" className=" rounded-xl -z-10" fill src={imgSrc} />
        </div>
    )
}