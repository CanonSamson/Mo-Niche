'use client'
import Icon from '@/components/Icon'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import { products } from '@/data/products'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Page = () => {
  const details = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProduct, setRelatedProduct] = useState(null)

  useEffect(() => {
    const product = products.find((product) => product.uid == details.product)
    const relatedProduct = products.filter(
      (product) => product.category == 'after-party-dress',
    )
    setProduct(product)
    setRelatedProduct([
      relatedProduct[0],
      relatedProduct[1],
      relatedProduct[2],
      relatedProduct[3],
    ])
  }, [details.product, details.category])
  return (
    <>
      <Navbar />
      <div className=" pt-[60px] px-4 pb-20">
        <Image
          src={product?.images[0]}
          width={300}
          height={300}
          className=" h-auto  bg-gray-100 w-full object-cover"
        />
        <div className=" grid grid-cols-3 gap-4 mt-4">
          <div className=" bg-gray-100 w-full h-[100px] flex"></div>
          <div className=" bg-gray-100 w-full h-[100px] flex"></div>
          <div className=" bg-gray-100 w-full h-[100px] flex"></div>
        </div>
        <div className="flex flex-col mt-5">
          <span className=" text-[20px] font-light">{product?.name}</span>
          <span className=" text-[24px] mt-3">
            {product?.currency == 'USD' && '$'} {product?.price}
          </span>
        </div>

        <div className=" mt-10 flex font-semibold items-start gap-4">
          <button className=" flex items-center justify-center  h-[50px] border border-gray-900 text-gray-900 w-[50px] w-ful py-2 ">
            <Icon name="plus" size={20} />
          </button>
          <button className=" flex items-center justify-center  h-[50px] border border-gray-900 text-gray-900 w-[50px] min-w-ful py-2 ">
            0
          </button>
          <button className=" flex items-center justify-center  h-[50px] border border-gray-900 text-gray-900 w-[50px] w-ful py-2 ">
            <Icon name="minus" size={20} />
          </button>
        </div>

        <div className=" mt-10">
          <button className=" bg-gray-900 w-full text-white py-2">
            Add to Cart
          </button>
        </div>
      </div>

      <section className=" px-4 mt-20 ">
        <div className="  items-center flex flex-col  justify-center ">
          <h3>You may also Like</h3>
          <p className=" border-b border-black">View all</p>
        </div>

        <div className="  grid grid-cols-2 gap-4 mt-4">
          {relatedProduct?.map((relatedProduct, index) => (
            <Product key={index} {...relatedProduct} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Page
