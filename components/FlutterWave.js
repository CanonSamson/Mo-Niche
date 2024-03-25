"use client";

import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";

export default function FlutterWave({ user }) {
  const { currency } = useSelector((state) => state.app);
  const { subtotal } = useSelector((state) => state.cart);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLWPUBK,
    tx_ref: Date.now(),
    amount:
      subtotal?.total.length > 1
        ? subtotal?.total?.slice(1, subtotal.total.length + 1)
        : 0,
    currency: currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      phone_number: user.phone_number,
      name: user.name,
    },
    customizations: {
      title: "Mo Niche Collection",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="bg-gray-900  items-center flex justify-center mt-10 w-full text-white py-2">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
