import Icon from './Icon'
import Input from './Input'

const Footer = () => {
  return (
    <footer className=" text-[14px]">
      <div className=" px-4 text-center border-b pb-10 mt-20 mb-10">
        <span>Receive exclusive promotions, private sales and news</span>

        <form action="" className=" mt-10 gap-2 flex flex-col">
          <Input
            className=" rounded-none focus:outline-none border-[1px] border-gray-900 w-full p-2"
            placeholder="Enter your e-mail"
            type="email"
          />
          <button className=" bg-gray-900 w-full text-white py-2">
            Subscribe
          </button>
        </form>
      </div>

      <ol className="grid gap-2 px-2">
        <li>Help</li>
        <li>Contact</li>
        <li>Register</li>
        <li>Shops</li>
        <li>Company</li>
        <li>Franchises</li>
        <li>Become a Mo Niche Lady</li>
        <li>Press</li>
        <li>Site map</li>
        <li>Sustainability</li>
        <li>Complaints and code of ethics</li>
      </ol>

      <ul className=" flex items-center justify-center gap-4 mt-20 pb-10">
        <li>
          <Icon size={24} name="facebook" />
        </li>
        <li>
          <a href="https://www.instagram.com/house_of_mo_niche?igsh=dG12bXFtcmUwZGJp">
            <Icon size={24} name="instagram" />
          </a>
        </li>
        <li>
          <Icon size={24} name="x" />
        </li>
        <li>
          <a href="">
            <Icon size={24} name="youtube" />
          </a>
        </li>
      </ul>
      <div className=" flex pb-10 justify-center px-2">
        <span className=" text-center">
          © 2024 Mo Niche Collections All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
