"use client";

import { useState } from "react";
import Input from "@/components/Input";
import AddressCard from "./AddressCard";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "@/Redux/actions/getUser";
import withAuth from "@/app/withAuth";

const ShippingAddresses = () => {
  // State variables for form fields and error
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.app);

  // Handler for adding a new shipping address
  const handleAddAddress = async (event) => {
    event.preventDefault();

    // Simple validation to check if fields are empty
    if (!name.trim() || !phoneNumber.trim() || !address.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const newAddress = {
      name,
      phoneNumber,
      address,
    };
    const token = localStorage.getItem("token");
    try {
      const response = fetch("/api/address", {
        method: "POST",
        body: JSON.stringify({ address: newAddress }),

        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        await response.json();
        await getUserDetails(dispatch);

        setName("");
        setPhoneNumber("");
        setAddress("");
        setError("");
      } else {
      }
    } catch (error) {
      console.log(error);
    }
    // Optionally, send the new address to the backend for storage
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
            <button
              type="submit"
              className="bg-gray-900 mt-5 text-white py-2 px-4"
            >
              Add Address
            </button>
          </form>
        </div>
        <div className="mt-5 grid gap-4">
          {user?.shippingAddresses ? (
            user?.shippingAddresses?.map((address, index) => (
              <AddressCard
                key={index}
                name={address.name}
                phoneNumber={address.phoneNumber}
                address={address.address}
              />
            ))
          ) : (
            <>No Address</>
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuth(ShippingAddresses);
