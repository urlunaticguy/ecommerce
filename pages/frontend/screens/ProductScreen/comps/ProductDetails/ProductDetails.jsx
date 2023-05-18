import React from "react";
import ProductImages from "./comps/ProductImages";
import ProductCard from "./comps/ProductCard";

function ProductDetails() {
  return <div className=" flex flex-row w-full mt-8 items-center justify-center">
    <ProductImages />
    <ProductCard />

  </div>;
}

export default ProductDetails;
