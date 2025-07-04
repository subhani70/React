import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        let res = await fetch("https://dummyjson.com/todos");
        let data = await res.json();
        console.log(data.todos);
        setTodos(data.todos);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <h1 className=" shadow-2xl shadow-red-500 text-6xl bg-gray-900 text-center pt-[40px] text-white font-semibold">All Todos</h1>
            <section className="grid grid-cols-3 gap-6 p-[50px] bg-gray-900 min-h-screen">
                {todos.length > 0 ? (
                    todos.map((todo) => {
                        const { id, todo: title, completed, userId } = todo;
                        return (
                            <div
                                key={id}
                                className="bg-white shadow-sm shadow-red-500 rounded-xl p-6 hover:shadow-2xl transition duration-300"
                            >
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {id}: {title}
                                </h2>
                                <p className={`text-md font-semibold ${completed ? 'text-green-600' : 'text-red-600'}`}>
                                    {completed ? 'Completed ' : 'Not Completed '}
                                </p>
                                <p className="mt-2 text-sm text-gray-500">User ID: {userId}</p>
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

export default Todo;
