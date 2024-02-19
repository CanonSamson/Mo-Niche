import Link from "next/link";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiAccountPinCircleLine } from "react-icons/ri";
import Icon from "@/components/Icon";

const Account = () => {
  return (
    <main className=" text-[16px] pb-[100px] font-light pt-[80px] font-sans">
      <div className="">
        <span className="  capitalize flex px-4 text-[18px] pb-2 font-medium">
          Hello, Canon Samson
        </span>
        <ul className=" grid gap-2">
          <li className="">
            <Link
              className=" flex items-center h-[55px]  border px-4  gap-4"
              href=""
            >
              <MdOutlineForwardToInbox size={24} />
              <span>Orders</span>
            </Link>
          </li>
          <li className="">
            <Link
              className=" flex items-center h-[55px]  border px-4  gap-4"
              href=""
            >
              <GiClothes size={24} />
              <span>Inbox</span>
            </Link>
          </li>
        </ul>
        <div className=" mt-8">
          <span className="  capitalize opacity-95  px-4 text-[16px] flex pb-2 font-medium">
            settings
          </span>
        </div>
        <ul className=" grid gap-2">
          <li className="">
            <Link
              className=" flex items-center h-[55px]  border px-4  gap-4"
              href=""
            >
              <Icon name="person" size={24} />

              <span>My Info</span>
            </Link>
          </li>
          <li className="">
            <Link
              className=" flex items-center h-[55px]  border px-4  gap-4"
              href=""
            >
              <LiaShippingFastSolid size={24} />
              <span>Shipping Addresses</span>
            </Link>
          </li>
          <li className="">
            <Link
              className=" flex items-center h-[55px]  border px-4  gap-4"
              href=""
            >
              <RiAccountPinCircleLine size={24} />
              <span>Close Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Account;
