'use client'

import Input from '@/components/Input'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className=" pt-[100px] pb-[150px]  w-full z-4 relative px-4">
      <div className="  bg-white min-h-[300px] min-w-[300px] w-full  flex flex-col">
        <h1 className=" text-center text-2xl">Create Account</h1>
        <p className="text-center">
          Be the first to know about our special offers and new lookbooks.
        </p>
        <form action="" className=" mt-10 gap-2 flex flex-col">
          <Input label="Name" type="text" placeholder="Name" />

          <Input label="Email" type="email" placeholder="Email*" />
          <Input label="Password" placeholder="Password" type="password" />

          <div>
            <span className="mt-10 flex">
              Complete the following details to make your purchases much
              quicker.
            </span>
            <Input label="" placeholder="Address" type="text" />
          </div>

          <button className="mt-5 bg-gray-900 w-full text-white py-2">
            Create Account
          </button>

          <span>
            By clicking on &apos;Create account &apos;, you accept our
            Confidentiality Policy .
          </span>
          <span className=" text-[12px] mt-2 flex gap-2">
            <Link
              href="/login"
              className=" text-primary hover:underline duration-200"
            >
              Log in with an existing account
            </Link>{' '}
            <span> or </span>{' '}
            <Link
              href="/"
              className=" text-primary hover:underline duration-200"
            >
              Return to Store
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Signup
