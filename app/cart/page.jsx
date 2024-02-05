import Icon from "@/components/Icon";
import Link from "next/link";

const Cart = () => {
  return (
    <div>
      {/* <EmptyCart /> */}
      <div className=" h-screen px-4 mt-[60px] w-full text-gray-900">
        <div className=" py-4 mb-5">
          <span>Shopping cart (2)</span>
        </div>

        <div className="flex items-start justify-center text-[14px]  gap-4">
          <div className=" flex items-start gap-4">
            <div className=" bg-gray-200 flex h-[120px] w-[100px]"></div>
            <div className=" flex flex-col">
              <span className=" flex  text-base font-medium">
                High tea Jumpsuit
              </span>
              <span className=" flex pb-2"> Size: Regular UK 8 4 in stock</span>
              <div className="  flex font-semibold items-start gap-4">
                <button className=" flex items-center justify-center  h-[30px] border border-gray-900 text-gray-900 w-[30px] w-ful py-2 ">
                  <Icon name="plus" size={20} />
                </button>
                <button className=" flex items-center justify-center  h-[30px] border border-gray-900 text-gray-900 w-[30px] min-w-ful py-2 ">
                  0
                </button>
                <button className=" flex items-center justify-center  h-[30px] border border-gray-900 text-gray-900 w-[30px] w-ful py-2 ">
                  <Icon name="minus" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div>
            <span className=" text-xl font-semibold">$691.00</span>
          </div>
        </div>
      </div>

      <div className=" border-t z-[20] right-0 text-[16px] w-full fixed  p-5 bg-white bottom-0 ">
        <div className=" flex items-center justify-between  pb-10">
          <span>Subtotal:</span>{" "}
          <span className=" text-xl font-semibold"> $1,382.00</span>
        </div>
        <div className=" pb-4">
          <span> Taxes and shipping calculated at</span>
          <span>Add a note to your order</span>
        </div>
        <button className=" bg-gray-900 w-full text-white py-2">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;

const EmptyCart = () => {
  return (
    <div className=" h-screen items-center flex justify-center w-full text-gray-900">
      <div className=" flex flex-col items-center ">
        <Icon name="cart" size={50} />
        <span className=" my-2">export default EmptyCart</span>
        <Link
          href="/"
          className="relative duration-700 mt-5 text-white px-4 py-3 bg-black "
        >
          Start shopping
        </Link>
      </div>
    </div>
  );
};
