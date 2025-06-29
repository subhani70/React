import React, { useState } from 'react';

const C5 = () => {
    const [participantName, setParticipantName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [eventType, setEventType] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
    const [events, setEvents] = useState([]);
    const [tshirtSize, setTshirtSize] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            participantName,
            email,
            mobile,
            eventType,
            collegeName,
            year,
            gender,
            events,
            tshirtSize,
            comments,
        });

        // Clear all fields
        setParticipantName('');
        setEmail('');
        setMobile('');
        setEventType('');
        setCollegeName('');
        setYear('');
        setGender('');
        setEvents([]);
        setTshirtSize('');
        setComments('');
    };

    const handleEvents = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        checked
            ? setEvents([...events, value])
            : setEvents(events.filter((ev) => ev !== value));
    };

    return (
        <section className='bg-white w-[700px] mx-auto mt-10 rounded-xl shadow-2xl px-10 py-12'>
            <h1 className='text-4xl font-bold text-center text-green-700 mb-8'>Event Registration</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

                <input
                    type="text"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder='Participant Name'
                    className='rounded px-4 py-2 border'
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className='rounded px-4 py-2 border'
                />

                <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder='Mobile Number'
                    className='rounded px-4 py-2 border'
                />

                <div className='flex flex-col'>
                    <label className='mb-1'>Event Type</label>
                    <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className='rounded px-4 py-2 border'
                    >
                        <option value="" hidden>Select Event Type</option>
                        <option value="Technical">Technical</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Sports">Sports</option>
                    </select>
                </div>

                <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder='College Name'
                    className='rounded px-4 py-2 border'
                />

                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder='Year of Study'
                    className='rounded px-4 py-2 border'
                />

                <div>
                    <h2 className='font-medium mb-1'>Select Gender</h2>
                    <div className='flex gap-5'>
                        <label><input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female</label>
                        <label><input type="radio" name="gender" value="Other" checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} /> Other</label>
                    </div>
                </div>

                <div>
                    <h2 className='font-medium mb-1'>Events Interested In</h2>
                    <div className='flex gap-4 flex-wrap'>
                        <label><input type="checkbox" value="Hackathon" checked={events.includes("Hackathon")} onChange={handleEvents} /> Hackathon</label>
                        <label><input type="checkbox" value="Dance" checked={events.includes("Dance")} onChange={handleEvents} /> Dance</label>
                        <label><input type="checkbox" value="Quiz" checked={events.includes("Quiz")} onChange={handleEvents} /> Quiz</label>
                        <label><input type="checkbox" value="Football" checked={events.includes("Football")} onChange={handleEvents} /> Football</label>
                    </div>
                </div>

                <div>
                    <label className='mb-1 block'>T-Shirt Size</label>
                    <select
                        value={tshirtSize}
                        onChange={(e) => setTshirtSize(e.target.value)}
                        className='rounded px-4 py-2 border w-full'
                    >
                        <option value="" hidden>Select Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>

                <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder='Any comments or special requirements...'
                    className='rounded px-4 py-2 border'
                ></textarea>

                <button type="submit" className='bg-green-600 text-white py-3 rounded hover:bg-green-700 mt-4'>
                    Register Now
                </button>
            </form>
        </section>
    );
};

export default C5;
