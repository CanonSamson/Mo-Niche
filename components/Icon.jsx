// components/Icon.js
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { RxPerson } from 'react-icons/rx'
import { CiShoppingCart, CiSearch, CiFacebook, CiHeart  } from 'react-icons/ci'
import { IoStorefrontOutline } from 'react-icons/io5'
import { IoIosHelpCircleOutline, IoMdClose  } from 'react-icons/io'

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoLogoInstagram,
} from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { MdOutlineContactSupport } from "react-icons/md";
const iconComponents = {
  bar: RiBarChartHorizontalLine,
  cart: CiShoppingCart,
  close: IoMdClose,
  facebook: CiFacebook,
  help: IoIosHelpCircleOutline,
  instagram: IoLogoInstagram,
  person: RxPerson,
  right: IoIosArrowForward,
  left: IoIosArrowBack,
  search: CiSearch,
  store: IoStorefrontOutline,
  x: RiTwitterXLine,
  youtube: AiOutlineYoutube,
  bag: BsBag,
  wishlist: CiHeart ,
  contact: MdOutlineContactSupport
}

const Icon = ({ name, ...props }) => {
  const IconComponent = iconComponents[name]

  if (!IconComponent) {
    console.error(`Icon '${name}' not found.`)
    return null
  }

  return <IconComponent {...props} />
}

export default Icon
