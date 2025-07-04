import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const User2 = () => {
    const [users, setUsers] = useState([]);

    let getUsers = async () => {
        let data = await fetch("https://api.github.com/users");
        let res = await data.json();
        console.log(res);
        setUsers(res);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1 className='text-8xl bg-gray-100 text-center pt-[40px] '>Github Users</h1>
            <section className="grid grid-cols-3 gap-6 p-[100px] bg-gray-100 min-h-screen">
                {users.length > 0 ? users.map((user) => {
                    const { avatar_url, login, id, html_url } = user;
                    return (

                        <div
                            key={id}
                            className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={avatar_url}
                                alt={login}
                                className="w-[300px] h-[300px] rounded-full mb-4 border-4 border-blue-500"
                            />
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{login}</h2>
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-md"
                            >
                                View Profile
                            </a>
                        </div>
                    );
                }) : <Loader />}
            </section>
        </>);
};

export default User2;
