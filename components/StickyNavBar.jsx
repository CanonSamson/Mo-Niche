"use client";

import Icon from "./Icon";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "@/Redux/appSlice";
import { usePathname } from "next/navigation";

const StickyNavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [viewCurrencies, setViewCurrencies] = useState(false);
  const [viewSideBar, setViewSideBar] = useState(false);
  const pathname = usePathname();
  const { currenties, currency } = useSelector((state) => state.app);
  const { items: cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setScroll(true);
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  return (
    <nav>
      <SearchBar search={search} setSearch={setSearch} />
      <div
        className={` ${
          scroll ? "bg-white text-[#414141]" : " text-white"
        } duration-500  fixed top-0 right-0 z-50 w-full  flex items-center h-[60px] px-4 justify-between`}
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

          <Link onClick={() => setViewSideBar(false)} href="/">
            <Image
              src={!scroll ? "/logo-white.svg" : "/logo-black.svg"}
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
              <span>{currency}</span>
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
              } right-0 border hover:cursor-pointer border-gray-200 duration-500 text-black absolute top-7  shadow-lg text-[14px] z-50 bg-white `}
            >
              {currenties.map(({ code }, index) => (
                <>
                  {currency != code && (
                    <li
                      key={index}
                      onClick={() => {
                        dispatch(setCurrency(code));
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
                {cart.length ?? 0}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <SideBar setViewSideBar={setViewSideBar} viewSideBar={viewSideBar} />
    </nav>
  );
};

export default StickyNavBar;
