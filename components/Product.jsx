import Image from "next/image";
import Link from "next/link";

const Product = ({ images, name, price, currency, category, uid }) => {
  return (
    <Link href={`/products/${uid}`} className="  flex flex-col ">
      <Image
        src={images[0]}
        width={500}
        height={500}
        className=" h-[250px] w-full object-cover object-top "
        alt="product"
      />
      <span className=" text-[14px]">{name}</span>
      <span className=" text-">
        {currency == "USD" && "$"} {price}
      </span>
      <div className="flex items-center gap-2">
        <span className=" flex h-[14px] w-[14px] bg-white border rounded-full  " />
        <span className=" flex h-[14px] w-[14px] bg-sky-600 rounded-full  " />
        {/* <span className=" flex h-[14px] w-[14px] bg-gray-900 rounded-full  " /> */}
        <span>+ 2 more</span>
      </div>
    </Link>
  );
};

export default Product;
