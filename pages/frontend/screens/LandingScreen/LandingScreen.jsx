import LandingNavbar from "./comps/Navbar"
import LandingCarousel from "./comps/Carousel"
import LandingFilterBar from "./comps/FilterBar"
import ProductsContainer from "./comps/ProductsContainer/ProductsContainer"

export default function LandingScreen() {
    return (
        <div className=" min-w-full flex flex-col items-center">
            <LandingNavbar />
            <LandingCarousel />
            <LandingFilterBar />
            <ProductsContainer />
        </div>
    )
}