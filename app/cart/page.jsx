import Icon from '@/components/Icon'
import Link from 'next/link'

const Cart = () => {
  return (
    <div>
      <EmptyCart />
    </div>
  )
}

export default Cart

const EmptyCart = () => {
  return (
    <div className=" h-screen items-center flex justify-center w-full text-gray-900">
      <div className=" flex flex-col items-center ">
        <Icon name="cart" size={50} />
        <span className=' my-2'>export default EmptyCart</span>
        <Link href="/" className="relative duration-700 mt-5 text-white px-4 py-3 bg-black ">
          Start shopping
        </Link>
      </div>
    </div>
  )
}
