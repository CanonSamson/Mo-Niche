"use client";
import Product from "@/components/Product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState(null);
  const { products } = useSelector((state) => state.app);
  const [heading, setHeading] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      const heading = category?.split("-");

      setHeading(heading);
      console.log(heading);
      const categoryProducts = products.filter(
        (item) => item.category === category
      );
      setCategoryProducts(categoryProducts);
    };
    getProducts();
  }, [products]);

  return (
    <main className=" px-2 mt-20">
      <section className="mt-20  ">
        <div className="  items-center flex flex-col  justify-center ">
          <h3>
            {heading?.map((item, index) => (
              <span key={index}>{item} {" "}</span>
            ))}
          </h3>
          <p className=" border-b border-black">All products</p>
        </div>

        <div className="  grid grid-cols-2 gap-1 mt-4">
          {categoryProducts?.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
