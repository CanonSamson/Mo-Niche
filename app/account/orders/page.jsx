"use client";
import { useState } from "react";
import OrderCard from "./OrderCard"; // Import the OrderCard component

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      date: "2022-08-15",
      products: [
        {
          id: 1,
          price: 25.0,
          quantity: 2,
          product: {
            images: ["/images/image-8.jpg"],
            name: "Cape Sleeve Dress custom made",
            price: "90.00",
            currency: "USD",
            category: "",
            uid: "1233",
            description:
              " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          },
        },
      ],
      total: 100.0,
    },
  ]);

  return (
    <div className="pt-[100px] pb-[150px] w-full z-4 relative px-4">
      <div className="bg-white min-h-[300px] min-w-[300px] w-full flex flex-col">
        <h1 className="text-center text-2xl">My Orders</h1>

        <div className="grid grid-cols-3 border-b  mt-10">
          <button className=" h-[45px] flex items-center border-b border-black justify-center">
            Active
          </button>
          <button className=" h-[45px] flex items-center justify-center">
            Cancelled
          </button>
          <button className=" h-[45px] flex items-center justify-center">
            Completed
          </button>
        </div>
        <div className="mt-5">
          {orderHistory.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
