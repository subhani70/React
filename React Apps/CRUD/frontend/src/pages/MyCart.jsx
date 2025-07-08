import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyCart = () => {

    let [allcarts, setCarts] = useState([])
    let getMycart = async () => {
        let res = await fetch("http://localhost:3000/addtocart")
        let data = await res.json()
        setCarts(data)
    }

    let removeItemfromcart = async (id) => {
        await fetch(`http://localhost:3000/addtocart/${id}`, { method: "delete" })
        console.log("deletd");

    }

    useEffect(() => {
        getMycart()

    }, [allcarts])
    return (
        <div className='flex w-[90%] mx-auto gap-2'>
            {
                allcarts.map((cart) => {
                    let { title, img, id } = cart
                    return <div className='bg-white w-[300px] flex items-center flex-col h-[200px] rounded-2xl py-10 hover:shadow-2xl transition-all duration-500'>
                        <img src={img} className='h-[80%] w-full' alt="" />
                        <h1>{title}</h1>
                        <Link to="/mycart" onClick={() => { removeItemfromcart(id) }}>remove from cart</Link>
                    </div>
                })
            }
        </div>
    )
}

export default MyCart
