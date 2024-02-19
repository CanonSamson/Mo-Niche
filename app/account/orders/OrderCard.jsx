import Image from "next/image";

const OrderCard = ({ order }) => {
  const {
    id,
    orderNo,
    orderDate,
    estimatedDeliveryDate,
    orderStatus,
    paymentMethod,
    products, // Updated to handle an array of products
  } = order;

  return (
    <div key={id} className="border-b py-4">
      <div className="  bg-gray-100 p-4 rounded-md">
        <div className=" grid">
          <span>Order no: {orderNo}</span>
          <span>Order Date : {orderDate}</span>
          <span>Estimated Delivery Date : {estimatedDeliveryDate}</span>
        </div>
        <div className=" grid">
          <span>Order Status : {orderStatus}</span>
          <span>Payment Method : {paymentMethod}</span>
          <span>
            <strong>Total :</strong> {products.total}
          </span>
        </div>
      </div>

      <div className=" grid gap-4 mt-5">
        {products.map((item) => (
          <div key={item.id}>
            <div className=" flex items-start gap-4">
              <Image
                alt=""
                className="  object-contain flex bg-gray-200 w-[100px] h-[100px]"
                src={item.product.images[0]}
                width={200}
                height={200}
              />
              <div className=" grid">
                <span>{item.product.name}</span>
                <span>
                  <strong>Colour :</strong> {item?.itemColor}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
