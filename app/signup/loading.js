import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" animate-pulse z-[60] bg-white top-0 right-0 h-screen flex items-center justify-center w-full ">
      <Image src="/loading-logo.png" alt="logo" width={100} height={100} />
    </div>
  );
}
