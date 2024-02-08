"use client";
import Image from "next/image";
import Carousel from "./Carousel";
import DiscoverMore from "@/components/DiscoverMore";
import Link from "next/link";
import StickyNavBar from "@/components/StickyNavBar";
import { useAppContext } from "@/Context";
import Product from "@/components/Product";

export default function Home() {
  const { afterPartyDress } = useAppContext();
  return (
    <>
      <StickyNavBar />

      <main className=" pb-[100px]">
        <Carousel />

        <section className=" px-2 mt-5">
          <div className="  items-center flex flex-col  justify-center ">
            <h3>Shop Our Bestsellers</h3>
            <p className=" border-b border-black">View all</p>
          </div>

          <div className="  grid grid-cols-2 gap-4 mt-10">
            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-[14px]">
                Shop our bestsellers product name.
              </span>
              <span className=" text-">$ 200.00</span>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-[14px]">
                Shop our bestsellers product name.
              </span>
              <span className=" text-">$ 200.00</span>
            </div>
          </div>

          <DiscoverMore />
        </section>

        <section className=" px-2 mt-20 ">
          <div className="  items-center flex flex-col  justify-center ">
            <h3>After Part Dress</h3>
            <p className=" border-b border-black">View all</p>
          </div>

          <div className="  grid grid-cols-2 gap-2 mt-4">
            {afterPartyDress?.map((afterPartyDress, index) => (
              <Product key={index} {...afterPartyDress} />
            ))}
          </div>
        </section>
        <section className=" px-2 mt-20">
          <div className="flex flex-col text-white h-[320px] pb-10 bg-black w-full justify-end items-center p-4 px-4 relative">
            <Image
              src="/images/image-5.jpg"
              width={200}
              height={200}
              className=" h-full opacity-75 -z-1 right-0 top-0 absolute w-full object-cover object-top "
            />
            <span className=" text-4xl font-medium uppercase flex  z-10 ">
              #MoNicheLady
            </span>
            <Link href="#" className=" flex  z-10 ">
              <span className=" w-auto pb-1 items-start text-start border-b">
                Discover more
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
