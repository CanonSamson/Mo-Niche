"use client";
import Image from "next/image";
import Carousel from "./Carousel";
import DiscoverMore from "@/components/DiscoverMore";
import Link from "next/link";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";

export default function Home() {
  const { recommended, bestsellers } = useSelector((state) => state.app);

  return (
    <>
      <main className=" pb-[100px] font-light font-sans">
        <Carousel />

        <section className=" text-[14px] font-light px-4 mt-10">
          <div>
            <div className=" pb-10">
              <span>BESTSELLERS</span>
              <h2 className=" mt-4 text-[20px]">Shop our Favourites</h2>
            </div>
            <p>
              Mo Niche Collection, a brand that sells women&apos;s clothes,
              combines creativity and helping society. It cares about more than
              just making money; it wants to help the country grow too. Mo Niche
              Collection, works hard to improve communities and make Nigeria
              better. passion and creativity make big things happen in the
              fashion world.
            </p>
          </div>

          <div className="  grid grid-cols-2 gap-4 mt-10">
            {recommended.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>

          <DiscoverMore />
        </section>

        <section className=" px-4 mt-20 ">
          <div className="  items-center flex flex-col  justify-center ">
            <h3>Shop our bestsellers</h3>
            <p className=" border-b border-black">View all</p>
          </div>

          <div className="  grid grid-cols-2 gap-4 mt-4">
            {bestsellers.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </section>

        <section className=" px-4 mt-20">
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
      <Footer />
    </>
  );
}
