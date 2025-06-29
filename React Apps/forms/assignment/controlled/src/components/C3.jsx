import React, { useState } from 'react';

const C3 = () => {
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [city, setCity] = useState('');
    const [language, setLanguage] = useState('');
    const [gender, setGender] = useState('');
    const [interests, setInterests] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ fullname, phone, dob, city, language, gender, interests });

        setFullname('');
        setPhone('');
        setDob('');
        setCity('');
        setLanguage('');
        setGender('');
        setInterests([]);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleInterestsChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setInterests([...interests, value]);
        } else {
            setInterests(interests.filter((interest) => interest !== value));
        }
    };

    return (
        <>
            <section className='bg-orange-300 text-white w-[600px] mx-auto mt-10 rounded-3xl px-10 py-14 shadow-2xl'>
                <h1 className='text-4xl font-bold text-center mb-8'>Profile Form</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

                    <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder='Full Name' className='border-1 rounded px-4 py-2 text-black' />

                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' className='border-1 rounded px-4 py-2 text-black' />

                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className='border-1 rounded px-4 py-2 text-black' />

                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' className='border-1 rounded px-4 py-2 text-black' />

                    <div className='flex flex-col'>
                        <label className='mb-1'>Preferred Language</label>
                        <select value={language} onChange={(e) => setLanguage(e.target.value)} className='border-1 rounded px-4 py-2 text-black'>
                            <option value="" hidden>Select Language</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Telugu">Telugu</option>
                        </select>
                    </div>

                    <div>
                        <h2 className='text-lg mb-2'>Select Gender</h2>
                        <div className='flex gap-4'>
                            <label><input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={handleGenderChange} /> Male</label>
                            <label><input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={handleGenderChange} /> Female</label>
                            <label><input type="radio" name="gender" value="Other" checked={gender === 'Other'} onChange={handleGenderChange} /> Other</label>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-lg mb-2'>Select Interests</h2>
                        <div className='flex flex-wrap gap-4'>
                            <label><input type="checkbox" value="Music" checked={interests.includes("Music")} onChange={handleInterestsChange} /> Music</label>
                            <label><input type="checkbox" value="Art" checked={interests.includes("Art")} onChange={handleInterestsChange} /> Art</label>
                            <label><input type="checkbox" value="Sports" checked={interests.includes("Sports")} onChange={handleInterestsChange} /> Sports</label>
                            <label><input type="checkbox" value="Coding" checked={interests.includes("Coding")} onChange={handleInterestsChange} /> Coding</label>
                        </div>
                    </div>

                    <input type="submit" value="Submit" className='bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-lg mt-6 mx-auto w-1/2' />
                </form>
            </section>
        </>
    );
};

export default C3;
