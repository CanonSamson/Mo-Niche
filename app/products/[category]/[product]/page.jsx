"use client";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { products } from "@/data/products";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const details = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product.uid == details.product);
    const relatedProduct = products.filter(
      (product) => product.category == "after-party-dress"
    );
    setProduct(product);
    setRelatedProduct([
      relatedProduct[0],
      relatedProduct[1],
      relatedProduct[2],
      relatedProduct[3],
    ]);
  }, [details.product, details.category]);
  return (
    <>
      <Navbar />

      <div className=" pt-[60px]  pb-20">
        <div className=" bg-gray-100 py-5 flex justify-center mb-5">
          <span>HOME / SHOP PRODUCT</span>
        </div>
        <span className=" h-[400px] flex relative bg-gray-100 w-full object-cover" />

        <div className=" px-2 mt-5">
          <h1 className=" text-2xl ">Lorem ipsum accessories one</h1>
          <div className=" text-2xl py-2 mb-4">
            <span>$2.79</span> <span>$3.1</span>
          </div>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-10 px-2">
          <div className=" border items-center   h-[45px] border-gray-900 text-xl flex ">
            <span className=" px-4 ">-</span>
            <span className=" px-3">0</span>
            <span className=" px-3">+</span>
          </div>
          <button className=" bg-gray-900 h-[45px] flex items-center  p-4 text-white ">
            Add to Cart
          </button>
          <button>
            <Icon name="wishlist" size={24} />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
