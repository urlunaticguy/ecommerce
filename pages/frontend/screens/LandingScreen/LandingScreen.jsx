import LandingNavbar from "./comps/Navbar"
import LandingCarousel from "./comps/Carousel"
import LandingFilterBar from "./comps/FilterBar"
import ProductsContainer from "./comps/ProductsContainer/ProductsContainer"

export default function LandingScreen() {
    return (
        <div className=" min-w-full flex flex-col items-center 2xl:px-60 2xl:gap-8">
            <LandingNavbar />
            <LandingCarousel />
            <LandingFilterBar />
            <ProductsContainer />
        </div>
    )
}