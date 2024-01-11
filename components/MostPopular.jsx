import Image from 'next/image'

const MostPopular = ({ price, colors, image, name }) => {
  const Products = [
    {
      name: 'Product Name',
      description: 'A brief and captivating description of the product...',
      price: '',
      images: ['', ''],
      category: 'Clothing',
      colors: ['Red', 'Blue', 'Green'], // Add available color options
      sizes: ['Small', 'Medium', 'Large'], // Add available size options
      currencies: [{ currency: 'USD' }],
      availability: true, // or false if not available
      stock: 50, // quantity available in stock
      reviews: [
        {
          username: 'Customer1',
          rating: 4.5,
          comment: 'Great product! Highly recommended.',
        },
        // Add more reviews as needed
      ],
    },
  ]
  return (
    <div>
      <div>
        <Image src={image} alt={name} />
      </div>
      <span>{name}</span>
      <span>{price}</span>

      <div>
        {colors.map((color, index) => (
          <span
            key={index}
            className={` ${`bg-[${color}]`} 
             flex z-10 h-[10px] w-[10px] 
            rounded-full absolute top-1 -right-1 `}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default MostPopular
