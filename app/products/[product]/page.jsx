"use client";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";;
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const details = useParams();
  const [product, setProduct] = useState(null);
  const { recommended } = useSelector((state) => state.app);
  useEffect(() => {
    const product = recommended.find(
      (product) => product.uid == details.product
    );

    setProduct(product);
  }, [details.product, details.category]);
  return (
    <>
      <div className=" pt-[60px] font-sans font-light  pb-20">
        <div className=" bg-gray-100 py-5 flex justify-center mb-5">
          <span>
            <Link href="/">HOME</Link> /{" "}
            <Link href="/products"> OTHER PRODUCTS</Link>
          </span>
        </div>

        <img
          src={product?.images[0]}
          width={300}
          height={300}
          className=" h-auto  bg-gray-100 w-full object-cover"
        />

        <div className=" px-2 mt-5">
          <h1 className=" text-2xl ">{product?.name}</h1>
          <div className=" text-2xl py-2 mb-4">
            {product?.currency == "USD" && "$"} {product?.price}
          </div>
          <p>{product?.description}</p>
        </div>

        <div className="flex items-center gap-2 mt-10 px-2">
          <div className=" border items-center   h-[50px] border-gray-900 text-xl flex ">
            <span className=" px-4 ">-</span>
            <span className=" px-3">0</span>
            <span className=" px-3">+</span>
          </div>
          <button className="p-4  bg-gray-900 h-[50px] mr-4 flex items-center  text-white ">
            Add to Cart
          </button>
          <button>
            <Icon name="wishlist" size={24} />
          </button>
        </div>

        <div className=" mt-10 px-2"></div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
