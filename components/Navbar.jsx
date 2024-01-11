'use client'

import Icon from './Icon'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import LoginOrRegister from './LoginOrRegister'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NavBar = () => {
  const [scroll, setScroll] = useState(false)
  const [viewCurrencies, setViewCurrencies] = useState(false)
  const [viewSideBar, setViewSideBar] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    if (pathname != '/') {
      setScroll(true)
      return
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    // Attach the event listener
    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav>
      <div
        className={` ${
          scroll ? 'bg-white text-[#414141]' : ' text-white'
        } duration-500  fixed top-0 right-0 z-50 w-full  flex items-center h-[60px] px-4 justify-between`}
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
              src={!scroll ? '/logo-white.svg' : '/logo-black.svg'}
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
          <li>
            <Link href="login" className="relative">
              <Icon name="person" size={24} />
              <span className=" flex z-10 h-[5px] w-[5px] bg-red-500 rounded-full absolute top-1 -right-1 " />
              <span className=" animate-ping flex z-10 h-[5px] w-[5px] bg-red-500 rounded-full absolute top-1 -right-1 " />
            </Link>
          </li>

          <li>
            <Icon name="cart" size={24} />
          </li>
        </ul>
      </div>
      <LoginOrRegister />
      <SideBar setViewSideBar={setViewSideBar} viewSideBar={viewSideBar} />
    </nav>
  )
}

const SideBar = ({ setViewSideBar, viewSideBar }) => {
  return (
    <div
      className={`${
        viewSideBar ? 'right-0' : 'right-[1000%]'
      } duration-300 fixed z-40 text-[14px] bg-white w-full h-screen overflow-x-auto  top-[60px] `}
    >
      <div className="grid p-2">
        <div className=" bg-black rounded-md text-white w-full p-5 mb-5">
          <span>New Now</span>
        </div>

        <div className=" flex items-center justify-between py-2">
          <div className="grid">
            <span className=" text-base font-medium">Collections</span>
            <span className="text-[12px]">Look for every moment</span>
          </div>
          <button className=" flex  items-center gap-2">
            <span>View more</span>
            <Icon name="right" size={24} />
          </button>
        </div>

        <ul className=" grid mt-10 gap-4">
          <li className=" flex items-center gap-2">
            <Icon name="person" size={24} />
            <span>Sign in | Create account</span>
          </li>
          <li className=" flex items-center gap-2">
            <Icon name="bag" size={24} />
            <span>My purchases</span>
          </li>
          <li className=" flex items-center gap-2">
            <Icon name="person" size={24} />
            <span>Wishlist</span>
          </li>
          <li className=" flex items-center gap-2">
            <Icon name="store" size={24} />
            <span>Store locator</span>
          </li>

          <li className=" flex items-center gap-2">
            <Icon name="help" size={24} />
            <span>Help</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
