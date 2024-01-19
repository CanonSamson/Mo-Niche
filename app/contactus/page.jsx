import Input from '@/components/Input'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <main>
      <header className=" relative text-white w-full h-[300px] bg-gray-800 flex items-center justify-center  px-4">
        <h1 className=" relative z-[2] text-4xl font-medium">Contact Us</h1>
        <Image
          src="/images/image-6.jpg"
          width={400}
          height={300}
          alt=""
          className=" absolute w-full h-full object-cover z-[1]"
        />
      </header>

      <section className=" px-4 mt-10 pb-20">
        <h2 className=" text-xl font-medium pb-5">Contact Us</h2>

        <form action="" className="grid grid-cols-1 gap-4">
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Phone" />
          <div className=' w-full '>
            <Input label="Birthday" type="date" />
          </div>
          <Input label="Your Standard Size" />
          <div>
            <label htmlFor="" className=' font-medium'>Message</label>
            <textarea className=' bg-white w-full border border-black rounded-none flex-1 focus:outline-none placeholder:text-black  min-h-[100px]' />
          </div>

          <button className=" bg-black text-white font-medium w-full h-[45px] mt-10">
            Send
          </button>
        </form>
      </section>
    </main>
  )
}

export default ContactUs
