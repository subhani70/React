import React from 'react'
import { useState } from 'react';
const C2 = () => {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [dept, setDept] = useState('');
    const [year, setYear] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [hostel, setHostel] = useState('');
    const [transport, setTransport] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, roll, dept, year, hobbies, hostel, transport });
        setName('');
        setRoll('');
        setDept('');
        setYear('');
        setHobbies([]);
        setHostel('');
        setTransport('');
    };

    const handleHobbies = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        checked
            ? setHobbies([...hobbies, value])
            : setHobbies(hobbies.filter((h) => h !== value));
    };

    return (
        <section className="bg-gray-900 text-white w-[540px] mx-auto mt-10 rounded-2xl px-10 py-15">
            <h2 className="text-4xl text-center mb-6">Student Registration</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    className="outline-0 border-1 rounded px-3 py-2 w-full"
                />
                <input
                    type="text"
                    value={roll}
                    onChange={e => setRoll(e.target.value)}
                    placeholder="Roll Number"
                    className="outline-0 border-1 rounded px-3 py-2 w-full"
                />
                <select
                    value={dept}
                    onChange={e => setDept(e.target.value)}
                    className="outline-0 border-1 rounded px-3 py-2 w-full"
                >
                    <option value="" hidden>
                        Select Department
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="MECH">MECH</option>
                </select>
                <select
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    className="outline-0 border-1 rounded px-3 py-2 w-full"
                >
                    <option value="" hidden>
                        Select Year
                    </option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                </select>
                <div>
                    <div className="mb-2">Hobbies</div>
                    <div className="flex gap-3">
                        <label>
                            <input
                                type="checkbox"
                                value="Reading"
                                checked={hobbies.includes('Reading')}
                                onChange={handleHobbies}
                            />
                            Reading
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Sports"
                                checked={hobbies.includes('Sports')}
                                onChange={handleHobbies}
                            />
                            Sports
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Music"
                                checked={hobbies.includes('Music')}
                                onChange={handleHobbies}
                            />
                            Music
                        </label>
                    </div>
                </div>
                <div>
                    <div className="mb-2">Hostel Accommodation</div>
                    <div className="flex gap-3">
                        <label>
                            <input
                                type="radio"
                                name="hostel"
                                value="Yes"
                                checked={hostel === 'Yes'}
                                onChange={e => setHostel(e.target.value)}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="hostel"
                                value="No"
                                checked={hostel === 'No'}
                                onChange={e => setHostel(e.target.value)}
                            />
                            No
                        </label>
                    </div>
                </div>
                <div>
                    <div className="mb-2">Transport</div>
                    <div className="flex gap-3">
                        <label>
                            <input
                                type="radio"
                                name="transport"
                                value="Bus"
                                checked={transport === 'Bus'}
                                onChange={e => setTransport(e.target.value)}
                            />
                            Bus
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="transport"
                                value="Own"
                                checked={transport === 'Own'}
                                onChange={e => setTransport(e.target.value)}
                            />
                            Own
                        </label>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="bg-blue-500 px-5 py-3 rounded mt-5 mx-auto w-1/2"
                />
            </form>
        </section>
    );
};
export default C2