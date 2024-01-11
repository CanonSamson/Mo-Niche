import Image from "next/image"

const Wishlist = () => {
  return (
    <main className=" flex-col flex min-h-screen pb-20">
      <div className=" mt-[100px] w-full border-b pb-4">
        <h1 className=" text-center text-2xl">Wishlist</h1>
        <p className="text-center">
          This is the selection of items you like most
        </p>
      </div>

      <div className="  px-4 grid grid-cols-2 gap-4 mt-4">
        <div className="  flex flex-col ">
          <Image
            src="/images/placeholder.jpg"
            width={200}
            height={200}
            className=" h-[250px] w-full object-cover object-top "
          />
          <span className=" text-[14px]"> Ready to wear product name.</span>
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
          <span className=" text-[14px]"> Ready to wear product name.</span>
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
          <span className=" text-[14px]"> Ready to wear product name.</span>
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
          <span className=" text-[14px]"> Ready to wear product name.</span>
          <span className=" text-">$ 290.00</span>
          <div className="flex items-center gap-2">
            <span className=" flex h-[14px] w-[14px] bg-gray-500 rounded-full  " />
            <span className=" flex h-[14px] w-[14px] bg-gray-200 rounded-full  " />
            <span className=" flex h-[14px] w-[14px] bg-gray-300 rounded-full  " />
            <span>+ 2 more</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Wishlist
