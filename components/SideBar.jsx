import Link from "next/link";
import Icon from "./Icon";
import { useState } from "react";

const SideBar = ({ viewSideBar, setViewSideBar }) => {
  const [viewCollections, setViewCollections] = useState(false);
  const [viewShopLocation, setViewShopLocation] = useState(false);
  return (
    <div
      className={`${
        viewSideBar ? "right-0" : "right-[1000%]"
      } duration-300 fixed z-40 ${
        viewCollections && "pb-20 "
      } overflow-y-auto text-[14px] bg-white w-full h-screen overflow-x-auto  top-[60px] `}
    >
      <div className="grid p-2">
        <Link
          onClick={() => setViewSideBar(false)}
          href="/"
          className=" bg-black rounded-md text-white w-full p-5 mb-2"
        >
          <span>Home Page</span>
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setViewSideBar(false)}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdY63li9bCjM-WmilxZAOWqzL8EJC5aQpk7SUAx9An0BdSijQ/viewform?usp=sf_link"
          className=" bg-gray-100 rounded-md text-black w-full px-5 py-3 mb-5"
        >
          <span>Book a Consultation</span>
        </a>

        <div
          onClick={() => setViewCollections(!viewCollections)}
          className=" flex items-center justify-between py-2"
        >
          <div className="grid">
            <span className=" text-base font-medium">Collections</span>
            <span className="text-[12px]">Look for every moment</span>
          </div>
          <button className=" flex  items-center gap-2">
            <span>View more</span>
            <Icon
              name="right"
              size={24}
              className={` ${
                viewCollections ? " rotate-90" : " rotate-none"
              } duration-500`}
            />
          </button>
        </div>
        <ul
          className={`grid ${
            viewCollections ? " h-[300px]" : "  h-0"
          } relative  duration-700 overflow-hidden`}
        >
          <li className=" border-b p-2 ">
            <Link href="/products/category/ready-to-wear">Ready To Wear</Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/after-party-dress"
            >
              After Party Dress
            </Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/mo-niche-lady"
            >
              Mo Niche Lady
            </Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/2022-collections"
            >
              2022 Collections
            </Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/beachwear"
            >
              Beachwear
            </Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/business-attire"
            >
              Business Attire
            </Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/business-attire"
            >
              Birthday Dress
            </Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/formal-dress"
            >
              Formal Dress
            </Link>
          </li>
          <li>
            <Link
              className="  p-2 border-b "
              href="/products/category/wedding-dress"
            >
              Wedding Dress
            </Link>
          </li>
        </ul>
        <ul className=" grid mt-10 gap-4">
          <li>
            <Link
              onClick={() => setViewSideBar(false)}
              href="/login"
              className=" flex items-center gap-2"
            >
              <Icon name="person" size={24} />
              <span>Sign in | Create account</span>
            </Link>
          </li>
          <li className=" flex items-center gap-2">
            <Icon name="bag" size={24} />
            <span>My purchases</span>
          </li>
          <li>
            <Link
              onClick={() => setViewSideBar(false)}
              href="/wishlist"
              className=" flex items-center  justify-between"
            >
              <div href="/wishlist" className=" flex items-center gap-2">
                <Icon name="wishlist" size={24} />
                <span>Wishlist</span>
              </div>
              <span className="flex text-white z-10 h-[16px] justify-center items-center text-[10px]  font-bold w-[16px] bg-gray-900 rounded-full   ">
                0
              </span>
            </Link>
          </li>
          <li className=" ">
            <button
              onClick={() => setViewShopLocation(!viewShopLocation)}
              className="flex items-center gap-2"
            >
              <Icon name="store" size={24} />
              <span>Store locator</span>
            </button>
          </li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Mo+Niche+Collections/@9.0731886,7.4327706,17z/data=!3m1!4b1!4m6!3m5!1s0x104e756de862b02f:0x3d9e7eca67682fae!8m2!3d9.0731886!4d7.4353455!16s%2Fg%2F11sq1kp4ky?entry=ttu"
            className={` ${
              viewShopLocation ? " h-[130px]" : " h-0  min-h-0"
            } overflow-y-hidden  duration-500 flex flex-col gap-[4px]  bg-gray-50 px-4  justify-center`}
          >
            <span>Suite D21A Emmanuel plaza Utako</span>
            <span className="  uppercase">Abuja 900108</span>
            <span className="  uppercase">08055981993</span>
            <div className=" flex ">
              <span className=" pr-3 flex border-r border-gray-500 ">
                Opening hours
              </span>
              <span className=" flex pl-3">View map</span>
            </div>
          </a>
          <li className=" flex items-center gap-2">
            <Icon name="help" size={24} />
            <span>Help</span>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSePZH9GKvdb0EZk5QMhNMjPZpOi1YuTmojqhhg4IjltrArqFA/viewform"
              onClick={() => setViewSideBar(false)}
              className=" flex items-center gap-2"
            >
              <Icon name="contact" size={24} />
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
