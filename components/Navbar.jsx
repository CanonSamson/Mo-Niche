'use client'

import Icon from './Icon'
import {  useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SideBar from './SideBar'

const Navbar = () => {
  const [viewCurrencies, setViewCurrencies] = useState(false)
  const [viewSideBar, setViewSideBar] = useState(false)

  return (
    <nav>
      <div
        className={`bg-white text-[#414141]
        duration-500  fixed top-0 right-0 z-50 w-full  flex items-center h-[60px] px-4 justify-between`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewSideBar(!viewSideBar)}
            className=" flex items-center flex-col gap-1"
          >
            <Icon name={!viewSideBar ? 'bar' : 'close'} size={24} />
            <span className="text-[12px]">
              {!viewSideBar ? 'Menu' : 'Close'}
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
              <span>USD</span>
              <Icon
                name="right"
                className={`${
                  viewCurrencies ? ' -rotate-90' : 'rotate-90'
                } duration-300`}
                size={24}
              />
            </button>
            <ul
              className={`${
                !viewCurrencies
                  ? '  opacity-0 invisible'
                  : 'opacity-100 visible'
              } right-0 border border-gray-200 duration-500 text-black absolute top-7  shadow-lg text-[14px] z-50 bg-white `}
            >
              <li className="p-2 border-b border-gray-200">USD</li>
              <li className="p-2 border-b border-gray-200">GBP</li>
              <li className="p-2">EUR</li>
            </ul>
          </li>
          <li>
            <button>
              <Icon name="search" className="" size={24} />
            </button>
          </li>
          <li className=" relative">
            <Link href="/login">
              <Icon name="person" size={24} />
              <span className="flex z-10 h-[5px] w-[5px] bg-red-500 rounded-full absolute top-1 -right-1 " />
              <span className=" animate-ping flex z-10 h-[5px] w-[5px] bg-red-500 rounded-full absolute top-1 -right-1 " />
            </Link>
          </li>

          <li>
            <Link href="/cart">
              <Icon name="cart" size={24} />
            </Link>
          </li>
        </ul>
      </div>
      <SideBar setViewSideBar={setViewSideBar} viewSideBar={viewSideBar} />
    </nav>
  )
}


export default Navbar;