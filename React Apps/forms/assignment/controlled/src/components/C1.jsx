import React, { useState } from 'react';

const C1 = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [education, setEducation] = useState('');
    const [resume, setResume] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            fullName,
            phone,
            dob,
            city,
            state,
            country,
            gender,
            hobbies,
            education,
            resume
        });

        setFullName('');
        setPhone('');
        setDob('');
        setCity('');
        setState('');
        setCountry('');
        setGender('');
        setHobbies([]);
        setEducation('');
        setResume(null);
    };

    const handleHobbies = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        checked
            ? setHobbies([...hobbies, value])
            : setHobbies(hobbies.filter((h) => h !== value));
    };

    return (
        <section className='max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8'>
            <h2 className='text-4xl font-bold text-center text-blue-700 mb-8'>User Registration</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder='Full Name'
                    className='border rounded px-3 py-2'
                />

                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone Number'
                    className='border rounded px-3 py-2'
                />

                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className='border rounded px-3 py-2'
                />

                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='City'
                    className='border rounded px-3 py-2'
                />

                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder='State'
                    className='border rounded px-3 py-2'
                />

                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder='Country'
                    className='border rounded px-3 py-2'
                />

                <div>
                    <label >Gender:</label>
                    <div className='flex gap-4'>
                        <label><input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female</label>
                        <label><input type="radio" name="gender" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} /> Other</label>
                    </div>
                </div>

                <div>
                    <label >Select Hobbies:</label>
                    <div className='flex gap-4'>
                        <label><input type="checkbox" value="Reading" checked={hobbies.includes("Reading")} onChange={handleHobbies} /> Reading</label>
                        <label><input type="checkbox" value="Gaming" checked={hobbies.includes("Gaming")} onChange={handleHobbies} /> Gaming</label>
                        <label><input type="checkbox" value="Traveling" checked={hobbies.includes("Traveling")} onChange={handleHobbies} /> Traveling</label>
                    </div>
                </div>

                <div>
                    <label className='block mb-1 font-medium'>Education Level:</label>
                    <select
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        className='border rounded px-3 py-2 w-full'
                    >
                        <option value="" hidden>Select education</option>
                        <option value="High School">High School</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post Graduation">Post Graduation</option>
                    </select>
                </div>

                <div>
                    <label className='block mb-1 font-medium'>Upload Resume:</label>
                    <input type="file" onChange={(e) => setResume(e.target.files[0])} className='border rounded px-3 py-2 w-full' />

                </div>

                <button type="submit" className='bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default C1;
