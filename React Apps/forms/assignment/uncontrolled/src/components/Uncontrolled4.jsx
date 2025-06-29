import React, { useRef } from 'react';

const Uncontrolled4 = () => {
    const emailRef = useRef();
    const phoneRef = useRef();
    const countryRef = useRef();
    const statusRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            country: countryRef.current.value,
            status: statusRef.current.value,
        };
        console.log(data);

        emailRef.current.value = '';
        phoneRef.current.value = '';
        countryRef.current.value = '';
        statusRef.current.value = '';
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-24 bg-blue-100 text-gray-800 rounded-2xl shadow-lg p-14 flex flex-col gap-7 border-2 border-blue-400"
        >
            <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-800">Contact Details</h2>

            <label className="flex flex-col gap-2">
                <span className="font-semibold">Email</span>
                <input
                    ref={emailRef}
                    type="email"
                    className="border border-blue-300 rounded-lg px-4 py-3 bg-white focus:border-blue-500"
                    placeholder="Enter your email"
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="font-semibold">Phone</span>
                <input
                    ref={phoneRef}
                    type="tel"
                    className="border border-blue-300 rounded-lg px-4 py-3 bg-white focus:border-blue-500"
                    placeholder="Enter your phone number"
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="font-semibold">Country</span>
                <input
                    ref={countryRef}
                    type="text"
                    className="border border-blue-300 rounded-lg px-4 py-3 bg-white focus:border-blue-500"
                    placeholder="Enter your country"
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="font-semibold">Status</span>
                <select
                    ref={statusRef}
                    className="border border-blue-300 rounded-lg px-4 py-3 bg-white focus:border-blue-500"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select status
                    </option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </label>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg mt-5"
            >
                Submit Details
            </button>
        </form>
    );
};

export default Uncontrolled4;