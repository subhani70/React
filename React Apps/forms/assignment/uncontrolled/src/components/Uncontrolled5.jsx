import React, { useRef } from 'react';

const Uncontrolled5 = () => {
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
            className="w-[520px] min-h-[80vh] mx-auto mt-16 bg-violet-200  text-gray-900 rounded-3xl shadow-2xl p-16 flex flex-col gap-8 border-4 border-black"
        >
            <h2 className="text-4xl font-bold text-center mb-8 text-red-700">User Registration</h2>

            <label className="flex flex-col gap-2">
                <span className="font-semibold text-blue-700">Full Name</span>
                <input
                    ref={nameRef}
                    type="text"
                    className="border border-blue-400 rounded-xl px-5 py-4 bg-white focus:border-red-500"
                    placeholder="Enter your full name"
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="font-semibold text-blue-700">Age</span>
                <input
                    ref={ageRef}
                    type="number"
                    className="border border-blue-400 rounded-xl px-5 py-4 bg-white focus:border-red-500"
                    placeholder="Enter your age"
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="font-semibold text-blue-700">City</span>
                <input
                    ref={cityRef}
                    type="text"
                    className="border border-blue-400 rounded-xl px-5 py-4 bg-white focus:border-red-500"
                    placeholder="Enter your city"
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="font-semibold text-blue-700">Role</span>
                <select
                    ref={roleRef}
                    className="border border-blue-400 rounded-xl px-5 py-4 bg-white focus:border-red-500"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select role
                    </option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <button
                type="submit"
                className="bg-red-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl mt-8 transition-colors"
            >
                Register
            </button>
        </form>
    );
};

export default Uncontrolled5;