import React, { useEffect, useState } from 'react'

const Fetch = () => {
    let [products, setProducts] = useState([]);

    let getProducts = async () => {
        let data = await fetch("https://fakestoreapi.com/products")
        let result = await data.json();
        console.log(result);
        setProducts(result)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
        <section className='grid grid-cols-3 gap-20 w-[80vw] mx-auto mt-10'>
            {products.map((product,i)=>{
              let {category,description,image,price}=product;
              return <article key={i} className='p-8 border-1 rounded-2xl w-[400px] flex flex-col items-center justify-center'>
              <img src={image} className='w-[200px] h-[250px]' alt="" />
              <b className='text-2xl'>{category}</b>
                <h3 className='text-center'>{description.slice(0,100)}</h3>
                <p><strike>${price} </strike> <span><b className='text-xl'> ${price*0.75}</b></span> </p>
              </article>
            })}
        </section>

        </>)
}

export default Fetch