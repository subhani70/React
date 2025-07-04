import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        let res = await fetch("https://api.escuelajs.co/api/v1/categories");
        let data = await res.json();
        console.log(data);
        setCategories(data);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <h1 className='text-6xl bg-gray-100 text-center pt-[40px]'>Product Categories</h1>
            <section className="grid grid-cols-4 gap-6 p-[50px] bg-gray-100 min-h-screen">
                {categories.length > 0 ? (
                    categories.map((cat) => {
                        const { id, name, image } = cat;
                        return (
                            <div
                                key={id}
                                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition duration-300"
                            >
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-[200px] h-[200px] object-cover rounded-lg mb-4 border-4 border-yellow-400"
                                />
                                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                            </div>
                        );
                    })
                ) : (
                    <Loader />
                )}
            </section>
        </>
    );
};

export default Categories;
