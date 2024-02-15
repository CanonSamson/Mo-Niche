"use client"
import { useState } from "react";

const OrderHistory = () => {
  // Assume order history data is fetched from an API or context
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      date: "2022-08-15",
      products: [
        { id: 1, name: "T-shirt", price: 25.0, quantity: 2 },
        { id: 2, name: "Jeans", price: 50.0, quantity: 1 },
      ],
      total: 100.0,
    },
    {
      id: 2,
      date: "2022-09-20",
      products: [
        { id: 3, name: "Sweater", price: 35.0, quantity: 1 },
        { id: 4, name: "Jacket", price: 70.0, quantity: 1 },
      ],
      total: 105.0,
    },
  ]);

  return (
    <div className="pt-[100px] pb-[150px] w-full z-4 relative px-4">
      <div className="bg-white min-h-[300px] min-w-[300px] w-full flex flex-col">
        <h1 className="text-center text-2xl">Order History</h1>
        <div className="mt-5">
          {orderHistory.map((order) => (
            <div key={order.id} className="border-b py-4">
              <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>
              <p>Date: {order.date}</p>
              <div className="mt-2">
                <h3 className="text-lg font-semibold">Products:</h3>
                <ul>
                  {order.products.map((product) => (
                    <li key={product.id}>
                      {product.name} - ${product.price} x {product.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-2">Total: ${order.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
