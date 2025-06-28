import React from 'react'
import { useRef } from 'react';
const Uncontrolled3 = () => {
    const nameRef = useRef();
    const ageRef = useRef();
    const cityRef = useRef();
    const roleRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            city: cityRef.current.value,
            role: roleRef.current.value,
        };
        console.log(data);

        nameRef.current.value = '';
        ageRef.current.value = '';
        cityRef.current.value = '';
        roleRef.current.value = '';
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto mt-16 bg-green-100 text-gray-900 rounded-xl shadow-md p-10 flex flex-col gap-5 border-2 border-green-400"
        >
            <h2 className="text-2xl font-bold text-center mb-4 text-green-800">User Profile</h2>

            <label className="flex flex-col gap-1">
                <span className="font-medium">Name</span>
                <input
                    ref={nameRef}
                    type="text"
                    className="border border-green-300 rounded px-3 py-2 bg-white focus:border-green-500"
                    placeholder="Enter your name"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span className="font-medium">Age</span>
                <input
                    ref={ageRef}
                    type="number"
                    className="border border-green-300 rounded px-3 py-2 bg-white focus:border-green-500"
                    placeholder="Enter your age"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span className="font-medium">City</span>
                <input
                    ref={cityRef}
                    type="text"
                    className="border border-green-300 rounded px-3 py-2 bg-white focus:border-green-500"
                    placeholder="Enter your city"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span className="font-medium">Role</span>
                <select
                    ref={roleRef}
                    className="border border-green-300 rounded px-3 py-2 bg-white focus:border-green-500"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
            </label>

            <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded mt-3"
            >
                Save Profile
            </button>
        </form>
    );
};


export default Uncontrolled3