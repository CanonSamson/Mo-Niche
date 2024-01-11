import Image from 'next/image'
import Carousel from './Carousel'
import DiscoverMore from '@/components/DiscoverMore'
import Link from 'next/link'
import StickyNavBar from '@/components/StickyNavBar'

export default function Home() {
  return (
    <>
      <StickyNavBar />

      <main className=" pb-[100px]">
        <Carousel />

        <section className=" px-4 mt-5">
          <div className="  items-center flex flex-col  justify-center ">
            <h3>Shop our bestsellers</h3>
            <p>View all</p>
          </div>

          <div className="  grid grid-cols-2 gap-4 mt-10">
            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 200.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 200.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>
          </div>

          <DiscoverMore />
        </section>

        <section className=" px-4 mt-20 ">
          <div className="  items-center flex flex-col  justify-center ">
            <h3>Shop our bestsellers</h3>
            <p>View all</p>
          </div>

          <div className="  grid grid-cols-2 gap-4 mt-4">
            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 120.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 200.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 40.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 290.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>
          </div>
        </section>

        <section className=" px-4 mt-20 ">
          <div className="  items-center flex flex-col  justify-center ">
            <h3>Shop our bestsellers</h3>
            <p>View all</p>
          </div>

          <div className="  grid grid-cols-2 gap-4 mt-4">
            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 200.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 400.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 630.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>

            <div className="  flex flex-col ">
              <Image
                src="/images/placeholder.jpg"
                width={200}
                height={200}
                className=" h-[250px] w-full object-cover object-top "
              />
              <span className=" text-base font-medium ">Product name</span>
              <span className=" text-">$ 202.00</span>
              <div className="flex items-center gap-2">
                <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
                <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
                <span>+ 2 more</span>
              </div>
            </div>
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
              #MoNicheWemen
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
  )
}
