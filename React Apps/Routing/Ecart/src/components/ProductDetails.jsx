import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {

  let location = useLocation();
  console.log(location);

  let { category, title, price, description, image, rating: { count, rate } } = location.state
  return (
    <>
      <section className='w-[100%] '>
        <div className=' flex gap-x-3 w-[450px] mt-5 p-5 h-[300px]  mx-auto border-1 border-black rounded-2xl'>
          <div className='w-1/3 flex flex-col gap-3 items-center justify-center'>
            <img src={image}  alt="" />
             <p>rating:{rate}</p>
          </div>
          <div>
            <h1>{title}</h1>
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductDetails
