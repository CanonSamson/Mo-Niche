"use client";

import Icon from "./Icon";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";
import { useAppContext } from "@/Context";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [viewCurrencies, setViewCurrencies] = useState(false);
  const [viewSideBar, setViewSideBar] = useState(false);
  const [search, setSearch] = useState(false);
  const { currenties, setSelectedCurrency, selectedCurrency, cart } =
    useAppContext();
  return (
    <nav>
      <SearchBar search={search} setSearch={setSearch} />
      <div
        className={`bg-white text-[#414141]
        duration-500  fixed top-0 right-0 z-50 w-full  flex items-center h-[60px] px-4 justify-between`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewSideBar(!viewSideBar)}
            className=" flex items-center flex-col gap-1"
          >
            <Icon name={!viewSideBar ? "bar" : "close"} size={24} />
            <span className="text-[12px]">
              {!viewSideBar ? "Menu" : "Close"}
            </span>
          </button>

          <Link href="/">
            <Image
              src="/logo-black.svg"
              className=" w-[120px]"
              alt="mo niche collection logo"
              width={120}
              height={120}
            />
          </Link>
        </div>

        <ul className=" flex items-center gap-4">
          <li className=" relative flex  ">
            <button
              onClick={() => setViewCurrencies(!viewCurrencies)}
              className=" text-[14px] flex items-center  relative"
            >
              <span>{selectedCurrency}</span>
              <Icon
                name="right"
                className={`${
                  viewCurrencies ? " -rotate-90" : "rotate-90"
                } duration-300`}
                size={24}
              />
            </button>
            <ul
              className={`${
                !viewCurrencies
                  ? "  opacity-0 invisible"
                  : "opacity-100 visible"
              } right-0 border border-gray-200 duration-500 text-black absolute top-7  shadow-lg text-[14px] z-50 bg-white `}
            >
              {currenties.map(({ code }, index) => (
                <>
                  {selectedCurrency != code && (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCurrency(code);
                        setViewCurrencies(false);
                      }}
                      className={` p-2 border-b`}
                    >
                      {code}
                    </li>
                  )}
                </>
              ))}
            </ul>
          </li>
          <li>
            <button onClick={() => setSearch(true)}>
              <Icon name="search" className="" size={24} />
            </button>
          </li>
          <li className=" relative">
            <Link href="/login">
              <Icon name="person" size={24} />
            </Link>
          </li>

          <li className=" relative">
            <Link href="/cart">
              <Icon name="cart" size={24} />
              <span className="flex top-0 -right-2  text-white z-10 h-[16px] justify-center items-center text-[10px]  font-bold w-[16px] bg-gray-900 rounded-full absolute  ">
                {cart.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <SideBar setViewSideBar={setViewSideBar} viewSideBar={viewSideBar} />
    </nav>
  );
};

export default Navbar;
