"use client";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@/components/Icon";
import Link from "next/link";
import { removeItem, updateQuantity, updateSubtotal } from "@/Redux/cartSlice";
import Image from "next/image";
import { AiOutlineMinus } from "react-icons/ai";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, subtotal } = useSelector((state) => state.cart);

  // Function to handle increasing quantity
  const increaseQuantity = (id) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + 1;
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };
  // Function to handle decreasing quantity
  const decreaseQuantity = (id) => {
    const item = items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  // Function to handle removing item from the cart
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    NGN: "₦", // Nigerian Naira
  };
  const renderCartItems = () => {
    return items.map((item) => (
      <div
        key={item.id}
        className=" flex gap-4 pb-4 font-sans font-light justify-between items-center border-b "
      >
        {/* Product image */}
        <div className=" flex flex-1 gap-2 items-center">
          <Image
            src={item.product.images[0]}
            alt="Product"
            className="w-16 h-16 object-contain "
            width={100}
            height={100}
          />

          <div className="">
            {/* Product name */}
            <span className="block text-[14px] leading-none font-medium">
              {item.product.name}
            </span>
            {/* Product details (e.g., size, stock) */}
            <span className="block text-[12px] text-gray-500">
              Size: Regular UK 8, 4 in stock
            </span>
            <div className=" flex items-center  gap-2 mt-2">
              <div className="flex font-semibold border items-start gap-2">
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="flex items-center justify-center h-[30px] text-gray-900 w-[24px] w-ful py-2"
                >
                  <Icon name="plus" size={16} />
                </button>
                <button className="flex items-center justify-center h-[30px] text-gray-900 w-[24px] min-w-ful py-2">
                  {item.quantity}
                </button>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="flex items-center justify-center h-[30px] text-gray-900 w-[24px] w-ful py-2"
                >
                  <AiOutlineMinus size={16} />
                </button>
              </div>

              {/* Remove item button */}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        </div>
        {/* Product price */}
        <div>
          <span className="block text-lg font-semibold">
            {item.product.price}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {/* Check if cart is empty */}
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="h-screen px-4 mt-[60px] w-full text-gray-900">
          <div className="py-4 mb-5">
            <span>Shopping cart ({items.length})</span>
          </div>

          {/* Render cart items */}
          {renderCartItems()}

          {/* Render subtotal */}
          <div className="border-t z-[20] right-0 text-[16px] w-full fixed p-5 bg-white bottom-0">
            <div className="flex items-center justify-between pb-10">
              <span>Subtotal:</span>{" "}
              <span className="text-xl font-semibold">{subtotal.total}</span>
            </div>
            <div className="pb-4">
              <span>Taxes and shipping calculated at</span>
              <span>Add a note to your order</span>
            </div>
            <button className="bg-gray-900 w-full text-white py-2">
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

const EmptyCart = () => {
  return (
    <>
      <div className=" h-screen items-center flex justify-center w-full text-gray-900">
        <div className=" flex flex-col items-center ">
          <Icon name="cart" size={50} />
          <span className=" my-2">export default EmptyCart</span>
          <Link
            href="/"
            className="relative duration-700 mt-5 text-white px-4 py-3 bg-black "
          >
            Start shopping
          </Link>
        </div>
      </div>
    </>
  );
};
