const AddressCard = ({
  name,
  phoneNumber,
  address,
  defaultAddress,
  onRemove,
  onEdit,
}) => {
  return (
    <div className="  font-sans flex flex-col bg-gray-100 rounded-md p-5 gap-4">
      <span className=" capitalize">{name}</span>
      <span>{phoneNumber}</span>

      <span>{address}</span>
      <div>{defaultAddress && <button>Default billing address</button>}</div>
      <div className=" flex items-center ">
        <button className=" px-[10px]" onClick={onRemove}>
          Remove
        </button>
        <button className=" px-[10px]" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
