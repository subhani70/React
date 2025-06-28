import React, { useRef } from 'react';

const Uncontrolled = () => {
    const nameRef = useRef();
    const ageRef = useRef();
    const cityRef = useRef();
    const courseRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            city: cityRef.current.value,
            course: courseRef.current.value
        };
        console.log(formData);

        nameRef.current.value = '';
        ageRef.current.value = '';
        cityRef.current.value = '';
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-12 bg-slate-800 text-white rounded-lg shadow-lg p-8 flex flex-col gap-6"
        >
            <h2 className="text-3xl font-semibold text-center mb-6">Student Registration</h2>

            <label className="flex flex-col gap-1">
                <span>Full Name</span>
                <input
                    ref={nameRef}
                    type="text"
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-green-400"
                    placeholder="Enter your full name"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>Age</span>
                <input
                    ref={ageRef}
                    type="text"
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-green-400"
                    placeholder="Enter your age"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>City</span>
                <input
                    ref={cityRef}
                    type="text"
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-green-400"
                    placeholder="Enter your city"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>Course</span>
                <select
                    ref={courseRef}
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-green-400"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select course
                    </option>
                    <option value="bca">BCA</option>
                    <option value="bba">BBA</option>
                    <option value="bsc">B.Sc</option>
                </select>
            </label>

            <textarea
                className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-green-400"
                placeholder="Tell us about yourself"
            />

            <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mt-4"
            >
                Register
            </button>
        </form>
    );
};

export default Uncontrolled;