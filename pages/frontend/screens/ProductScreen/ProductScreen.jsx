import LandingNavbar from "../LandingScreen/comps/Navbar"
import ProductDetails from "./comps/ProductDetails/ProductDetails"

export default function ProductScreen() {
    return (
        <div className=" min-w-full flex flex-col items-center py-4 px-6 min-h-screen justify-between 2xl:px-60">
            <LandingNavbar />
            <ProductDetails />
            {/*
                Product Images component
                Product Details at a glance (details but in short)
                Add to cart / buy now component
                Product Details in full detail
                Reviews component
             */}
        </div>
    )
}