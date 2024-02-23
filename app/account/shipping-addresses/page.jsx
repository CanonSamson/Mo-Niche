"use client";

import { useState } from "react";
import Input from "@/components/Input";
import AddressCard from "./AddressCard";
import Link from "next/link";

const ShippingAddresses = () => {
  // Assume shipping addresses data is fetched from an API or context
  const [shippingAddresses, setShippingAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "1234567890",
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNumber: "9876543210",
      address: "456 Elm St, Town, Country",
    },
  ]);

  // State variables for form fields and error
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  // Handler for adding a new shipping address
  const handleAddAddress = (event) => {
    event.preventDefault();

    // Simple validation to check if fields are empty
    if (!name.trim() || !phoneNumber.trim() || !address.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const newAddress = {
      id: Date.now(), // Generate a unique ID
      name,
      phoneNumber,
      address,
    };
    setShippingAddresses([newAddress, ...shippingAddresses]);
    // Optionally, send the new address to the backend for storage
    setName("");
    setPhoneNumber("");
    setAddress("");
    setError("");
  };

  return (
    <div className="pt-[60px] pb-[150px] w-full z-4 relative">
      <div className="bg-gray-100 py-5 flex justify-center mb-5">
        <span className="uppercase">
          <Link href="/account">ACCOUNT</Link> /{" "}
          <Link href=""> Shipping Address</Link>
        </span>
      </div>
      <div className="bg-white min-h-[300px] min-w-[300px]  px-4 w-full flex flex-col">
        <h1 className="text-start text-2xl">Shipping Address</h1>

        <div className="mt-5">
          <h2 className="text-lg font-semibold mb-2">Add New Address</h2>
          <form onSubmit={handleAddAddress} className="grid gap-4">
            <Input
              label="Name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Phone Number"
              type="tel" // Update type to "tel" for phone number input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              label="Address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-gray-900 mt-5 text-white py-2 px-4">
              Add Address
            </button>
          </form>
        </div>
        <div className="mt-5 grid gap-4">
          {shippingAddresses.map((address, index) => (
            <AddressCard
              key={index}
              name={address.name}
              phoneNumber={address.phoneNumber}
              address={address.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingAddresses;
