import Image from "next/image";
import Link from "next/link";

const Product = ({ images, name, price, currency, category, uid }) => {
  return (
    <Link href={`/products/${category}/${uid}`} className="  flex flex-col ">
      <Image
        src={images[0]}
        width={200}
        height={200}
        className=" h-[250px] w-full object-cover object-top "
      />
      <span className=" text-[14px]">{name}</span>
      <span className=" text-">
        {currency == "USD" && "$"} {price}
      </span>
    </Link>
  );
};

export default Product;
