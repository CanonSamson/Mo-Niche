import Icon from './Icon'

const SideBar = ({  viewSideBar }) => {
  return (
    <div
      className={`${
        viewSideBar ? 'right-0' : 'right-[1000%]'
      } duration-300 fixed z-40 text-[14px] bg-white w-full h-screen overflow-x-auto  top-[60px] `}
    >
      <div className="grid p-2">
        <div className=" bg-black rounded-md text-white w-full p-5 mb-5">
          <span>New Now</span>
        </div>

        <div className=" flex items-center justify-between py-2">
          <div className="grid">
            <span className=" text-base font-medium">Collections</span>
            <span className="text-[12px]">Look for every moment</span>
          </div>
          <button className=" flex  items-center gap-2">
            <span>View more</span>
            <Icon name="right" size={24} />
          </button>
        </div>

        <ul className=" grid mt-10 gap-4">
          <li className=" flex items-center gap-2">
            <Icon name="person" size={24} />
            <span>Sign in | Create account</span>
          </li>
          <li className=" flex items-center gap-2">
            <Icon name="bag" size={24} />
            <span>My purchases</span>
          </li>
          <li className=" flex items-center gap-2">
            <Icon name="person" size={24} />
            <span>Wishlist</span>
          </li>
          <li className=" flex items-center gap-2">
            <Icon name="store" size={24} />
            <span>Store locator</span>
          </li>

          <li className=" flex items-center gap-2">
            <Icon name="help" size={24} />
            <span>Help</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
