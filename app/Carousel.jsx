'use client'

import Icon from '@/components/Icon'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Carousel({ autoSlideInterval = 3000 }) {
  const [curr, setCurr] = useState(0)
  const [animeText, setAnimeText] = useState(true)
  const images = [
    '/images/image-7.jpg',
    '/images/image-5.jpg',
    '/images/image-8.jpg',
  ]

  const carouselData = [
    {
      image: '/images/image-7.jpg',
      heading: '  Become a Mo Niche Woman',
      subtitle: '  ...WOMAN CLOTHES STORE...',

      buttons: [{ text: 'Book a Consultation' }],
    },
    {
      image: '/images/image-5.jpg',
      heading: ' Mo Niche Woman',
      subtitle: '  ...WOMAN CLOTHES STORE...',

      buttons: [{ text: 'Book a Consultation' }],
    },
    {
      image: '/images/image-8.jpg',
      heading: '  Become a Mo Niche Woman',
      subtitle: '  ...WOMAN CLOTHES...',

      buttons: [{ text: 'Shop Now' }, { text: 'Qick Buy' }],
    },
  ]
  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  useEffect(() => {
    setAnimeText((prev) => false)
    const slideInterval = setInterval(() => setAnimeText((prev) => true), 2000)
    return () => clearInterval(slideInterval)
  }, [curr])
  return (
    <header className=" justify-center items-center relative text-gray-100 flex flex-col w-full bg-gray-50 min-h-screen">
      <div className=" relative flex flex-col justify-center items-center z-20">
        <span
          className={`${
            animeText ? 'tracking-wide top-4  opacity-0' : ' opacity-100 top-1 '
          } relative duration-700  text-[12px]`}
        >
          {carouselData[curr]?.subtitle}
        </span>
        <h1
          className={`${
            animeText
              ? 'tracking-wide top-4  opacity-0'
              : 'pt-4 pb-10 opacity-100 top-1 '
          }  relative duration-700  font-serif  text-2xl `}
        >
          {carouselData[curr]?.heading}
        </h1>

        <div className="flex gap-2 text-[12px]">
          {carouselData[curr]?.buttons.map(({ text }, index) => (
            <button
              key={index}
              className={`${
                animeText
                  ? 'tracking-wide top-1  opacity-0'
                  : ' opacity-100 top-4 '
              } relative duration-700 bg-white px-4 py-3 text-black `}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-hidden  h-screen w-full object-cover absolute z-0  ">
        <div className="  transition-transform ease-out w-full h-full  duration-500">
          {images.map((item, index) => (
            <Image
              key={index}
              className={`${
                index === curr
                  ? 'z-30 opacity-100  scale-100'
                  : 'z-20 opacity-0 scale-110'
              } duration-500 w-full h-full object-cover absolute z-0`}
              src={item}
              width={800}
              height={800}
              alt=""
            />
          ))}
        </div>
        <div className="absolute md:flex inset-0 z-30 hidden items-center justify-between p-4">
          <button onClick={prev} className=" text-white">
            <Icon name="left" size={30} />
          </button>
          <button onClick={next} className=" text-white">
            <Icon name="right" size={30} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i % 2}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-0 border border-white'}
            `}
            />
          ))}
        </div>
      </div>
    </header>
  )
}
