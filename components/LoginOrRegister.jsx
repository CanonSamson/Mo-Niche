import Link from 'next/link'
import Icon from './Icon'
import Input from './Input'

const LoginOrRegister = () => {
  return <div className=""></div>
}

export default LoginOrRegister

const Login = () => {
  return (
    <>
      <button className=" absolute  z-1 bg-black/20 top-0 right-0 w-full h-screen" />
      <div className=" w-full z-4 relative px-4">
        <div className="  bg-white h-[300px] min-w-[300px] w-full p-4 flex flex-col">
          <button className=" w-[32px] h-[32px] ml-auto text-black">
            <Icon name="close" size={24} />
          </button>

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
            <button className=" bg-gray-900 w-full text-white py-2">
              Login
            </button>
            <span className=" text-[12px] mt-2 flex gap-2">
              <span> Don&lsquo;t have an account? </span>{' '}
              <Link
                href="/register"
                className=" text-primary hover:underline duration-200"
              >
                Sign-up here
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  )
}

const Register = () => {
  return (
    <>
      <form action=""></form>
    </>
  )
}
