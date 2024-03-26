import Image from "next/image";

const Wishlist = () => {
  return (
    <main className=" flex-col flex min-h-screen pb-20">
      <div className=" mt-[100px] w-full border-b pb-4">
        <h1 className=" text-center text-2xl">Wishlist</h1>
        <p className="text-center">
          This is the selection of items you like most
        </p>
      </div>
    </main>
  );
};

export default Wishlist;
