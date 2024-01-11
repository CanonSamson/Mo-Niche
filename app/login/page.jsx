'use client'

import Input from '@/components/Input'
import Link from 'next/link'

const Login = () => {
  return (
    <div className=" pt-[100px] pb-[150px]  w-full z-4 relative px-4">
      <div className="  bg-white h-[300px] min-w-[300px] w-full  flex flex-col">
        <h1 className=' text-center text-2xl'>Login</h1>
        <form action="" className=" mt-10 gap-2 flex flex-col">
          <Input
            label="Email"
            type="text"
            className=" rounded-none focus:outline-none border-[1px] border-gray-900 w-full p-2"
            placeholder="Email"
          />
          <Input
            label="Password"
            type="text"
            className=" rounded-none focus:outline-none border-[1px] border-gray-900 w-full p-2"
            placeholder="Password"
          />
          <span className=" underline text-[12px]">Forgotten Password</span>
          <button className=" mt-5 bg-gray-900 w-full text-white py-2">Login</button>
          <span className=" text-[12px] mt-2 flex gap-2">
            <span> Don&lsquo;t have an account? </span>{' '}
            <Link
              href="/signup"
              className=" text-primary hover:underline duration-200"
            >
              Sign-up here
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
