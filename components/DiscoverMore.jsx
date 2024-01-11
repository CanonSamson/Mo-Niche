'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const DiscoverMore = () => {
  const [curr, setCurr] = useState(0)


  const discoveries = [
    {
      image: '/images/image-3.jpg',
      heading: '  Impact Day Dress',
      subtitle: '  Discover more',
      link: '',
    },
    {
      image: '/images/image-5.jpg',
      heading: 'Collections - 2023',
      subtitle: '  Discover more',
      link: '',
    },
    {
      image: '/images/image-10.jpg',
      heading: 'Collections - 2024',
      subtitle: '  Discover more',
      link: '',
    },
  ]

  const prev = () =>
    setCurr((curr) => (curr === 0 ? discoveries.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === discoveries.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    const slideInterval = setInterval(next, 5000)
    return () => clearInterval(slideInterval)
  }, [])

  

  return (
    <div className="  flex mt-20">
      <div className="w-full">
        {discoveries.map(({ image, heading, link, subtitle }, index) => (
          <>
            {curr === index && (
              <div
                key={index}
                className=" p-4 bg-black  overflow-hidden  text-white w-full h-[400px] justify-end items-start relative flex flex-col"
              >
                <Image
                  src={image}
                  width={500}
                  height={500}
                  className="h-full opacity-70 -z-0 w-full top-0 right-0 object-cover absolute object-top "
                />

                <div className=" relative z-1 grid text-start">
                  <span className=" text-xl font-medium ">{heading}</span>
                  <Link href={link} className=" ">
                    <span className=" w-auto pb-1 items-start text-start border-b">
                      {subtitle}
                    </span>
                  </Link>
                </div>

                <div className="flex mt-4 items-center mx-auto  justify-center  z-1 relative">
                  <div className="flex items-center mx-auto  justify-center gap-2">
                    {discoveries.map((_, i) => (
                      <div
                        key={i}
                        className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? 'p-1' : 'bg-opacity-0 border border-white'}
            `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default DiscoverMore
