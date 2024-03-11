"use client";

import { addItem, updateQuantity } from "@/Redux/cartSlice";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const Page = () => {
  const details = useParams();
  const [product, setProduct] = useState(null);
  const { products, cartItems } = useSelector((state) => ({
    products: state.app.products,
    cartItems: state.cart.items,
  }));
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      const itemToAdd = {
        id: product.uid,
        product,
        quantity: 1,
      };
      dispatch(addItem(itemToAdd));
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(updateQuantity({ id: product.uid, quantity: quantity - 1 }));
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(updateQuantity({ id: product.uid, quantity: quantity + 1 }));
  };

  useEffect(() => {
    const product = products.find((product) => product.uid == details.product);
    setProduct(product);
  }, [details.product, details.category, products]);

  // Check if the product is already in the cart
  const isProductInCart =
    product && cartItems.some((item) => item.id === product.uid);

  return (
    <>
      <div className="pt-[60px] font-sans font-light pb-20">
        <div className="bg-gray-100 py-5 flex justify-center mb-5">
          <span>
            <Link href="/">HOME</Link> /{" "}
            <Link href="/products"> OTHER PRODUCTS</Link>
          </span>
        </div>
        <Image
          src={product?.images[0]}
          width={300}
          height={300}
          className="h-auto bg-gray-100 w-full object-cover"
          alt={product?.name}
        />
        <div className="px-2 mt-5">
          <h1 className="text-2xl">{product?.name}</h1>
          <div className="text-2xl py-2 mb-4 italic font-serif">
            {product?.price}
          </div>
          <p>{product?.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-10 px-2">
          <div className="border items-center h-[50px] border-gray-900 text-xl flex">
            <span className="px-4" onClick={decreaseQuantity}>
              <AiOutlineMinus />
            </span>
            <span className="px-3">{quantity}</span>
            <button className="px-3" onClick={increaseQuantity}>
              <GoPlus />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className={`p-4 bg-gray-900 h-[50px] mr-4 flex items-center text-white ${
              isProductInCart && "opacity-50 cursor-not-allowed"
            }`}
            disabled={isProductInCart}
          >
            {isProductInCart ? "Already in Cart" : "Add to Cart"}
          </button>
          <button>
            <Icon name="wishlist" size={24} />
          </button>
        </div>
        <div className="mt-10 px-2"></div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
