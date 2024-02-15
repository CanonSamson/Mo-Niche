"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input";

const ShippingAddresses = () => {
  // Assume shipping addresses data is fetched from an API or context
  const [shippingAddresses, setShippingAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St, Town, Country",
    },
  ]);

  // State variables for form fields
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // Handler for adding a new shipping address

  const handleAddAddress = (event) => {
    event.preventDefault();
    const newAddress = {
      id: Date.now(), // Generate a unique ID
      name,
      address,
    };
    setShippingAddresses([...shippingAddresses, newAddress]);
    // Optionally, send the new address to the backend for storage
    setName("");
    setAddress("");
  };

  return (
    <div className="pt-[100px] pb-[150px] w-full z-4 relative px-4">
      <div className="bg-white min-h-[300px] min-w-[300px] w-full flex flex-col">
        <h1 className="text-center text-2xl">Shipping Addresses</h1>
        <div className="mt-5">
          {shippingAddresses.map((address) => (
            <div key={address.id} className="border-b py-4">
              <h2 className="text-lg font-semibold">{address.name}</h2>
              <p>{address.address}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <h2 className="text-lg font-semibold mb-2">Add New Address</h2>
          <form onSubmit={handleAddAddress} className="grid gap-2">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit" className="bg-gray-900 text-white py-2 px-4">
              Add Address
            </button>
          </form>
        </div>
        <div className="mt-5">
          <Link href="/profile/settings">Back to Profile Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddresses;
