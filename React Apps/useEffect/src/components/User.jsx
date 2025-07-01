import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const User = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const data = await fetch('https://fakestoreapi.com/users');
        const result = await data.json();
        console.log(result);
        setUsers(result);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section className="grid grid-cols-3 gap-10 w-[80vw] mx-auto mt-10 text-white">
        { users.length>0?users.map((user, i) => {
                console.log(user)
                const {
                    name: { firstname, lastname },
                    email,
                    phone,
                    address: { city, street, number, zipcode },
                } = user;

                return (
                    <article
                        key={i}
                        className="p-6 border rounded-2xl shadow-lg bg-white flex flex-col gap-2"
                    >
                        <h2 className="text-xl font-bold">
                            {firstname} {lastname}
                        </h2>
                        <p><b>Email:</b> {email}</p>
                        <p><b>Phone:</b> {phone}</p>
                        <p><b>Address:</b> {number}, {street}, {city}, {zipcode}</p>
                    </article>
                );
            }):<Loader/> }
        </section>
    );
};

export default User;
