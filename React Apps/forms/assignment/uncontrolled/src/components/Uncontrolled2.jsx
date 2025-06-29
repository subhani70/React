import React from 'react'
import { useRef } from 'react';
const Uncontrolled2 = () => {
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const departmentRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            department: departmentRef.current.value,
        };
        console.log(formData);

        emailRef.current.value = '';
        phoneRef.current.value = '';
        addressRef.current.value = '';
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-12 bg-slate-800 text-white rounded-lg shadow-lg p-8 flex flex-col gap-6"
        >
            <h2 className="text-3xl font-semibold text-center mb-6">Employee Registration</h2>

            <label className="flex flex-col gap-1">
                <span>Email</span>
                <input
                    ref={emailRef}
                    type="email"
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-blue-400"
                    placeholder="Enter your email"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>Phone</span>
                <input
                    ref={phoneRef}
                    type="text"
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-blue-400"
                    placeholder="Enter your phone number"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>Address</span>
                <input
                    ref={addressRef}
                    type="text"
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-blue-400"
                    placeholder="Enter your address"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>Department</span>

                
                <select
                    ref={departmentRef}
                    className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-blue-400"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select department
                    </option>
                    <option value="hr">HR</option>
                    <option value="it">IT</option>
                    <option value="finance">Finance</option>
                </select>
            </label>

            <textarea
                className="border border-gray-400 rounded px-3 py-2 bg-slate-700 focus:border-blue-400"
                placeholder="Describe your experience"
            />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded mt-4"
            >
                Register
            </button>
        </form>
    );
};

export default Uncontrolled2