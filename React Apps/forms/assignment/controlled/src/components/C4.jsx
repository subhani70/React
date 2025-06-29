import React, { useState } from 'react';

const C4 = () => {
    const [studentName, setStudentName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [year, setYear] = useState('');
    const [feedback, setFeedback] = useState('');
    const [satisfaction, setSatisfaction] = useState('');
    const [topics, setTopics] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            studentName,
            rollNumber,
            email,
            course,
            year,
            feedback,
            satisfaction,
            topics
        });

        setStudentName('');
        setRollNumber('');
        setEmail('');
        setCourse('');
        setYear('');
        setFeedback('');
        setSatisfaction('');
        setTopics([]);
    };

    const handleTopics = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        checked
            ? setTopics([...topics, value])
            : setTopics(topics.filter((t) => t !== value));
    };

    return (
        <section className='bg-gray-100 w-[640px] mx-auto mt-10 rounded-xl shadow-md px-10 py-12'>
            <h1 className='text-3xl font-semibold text-center text-purple-700 mb-8'>Course Feedback Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

                <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder='Student Name'
                    className='rounded px-4 py-2 border'
                />

                <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    placeholder='Roll Number'
                    className='rounded px-4 py-2 border'
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className='rounded px-4 py-2 border'
                />

                <div className='flex flex-col'>
                    <label className='mb-1'>Select Course</label>
                    <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className='rounded px-4 py-2 border'
                    >
                        <option value="" hidden>Select</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="NodeJS">NodeJS</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                    </select>
                </div>

                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder='Year of Study'
                    className='rounded px-4 py-2 border'
                />

                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder='Write your feedback...'
                    className='rounded px-4 py-2 border'
                ></textarea>

                <div>
                    <h2 className='mb-1 font-medium'>Rate Satisfaction Level</h2>
                    <div className='flex gap-4'>
                        <label><input type="radio" name="satisfaction" value="Excellent" checked={satisfaction === 'Excellent'} onChange={(e) => setSatisfaction(e.target.value)} /> Excellent</label>
                        <label><input type="radio" name="satisfaction" value="Good" checked={satisfaction === 'Good'} onChange={(e) => setSatisfaction(e.target.value)} /> Good</label>
                        <label><input type="radio" name="satisfaction" value="Average" checked={satisfaction === 'Average'} onChange={(e) => setSatisfaction(e.target.value)} /> Average</label>
                    </div>
                </div>

                <div>
                    <h2 className='mb-1 font-medium'>Topics You Liked</h2>
                    <div className='flex gap-4 flex-wrap'>
                        <label><input type="checkbox" value="Hooks" checked={topics.includes("Hooks")} onChange={handleTopics} /> Hooks</label>
                        <label><input type="checkbox" value="Routing" checked={topics.includes("Routing")} onChange={handleTopics} /> Routing</label>
                        <label><input type="checkbox" value="State Management" checked={topics.includes("State Management")} onChange={handleTopics} /> State Management</label>
                        <label><input type="checkbox" value="APIs" checked={topics.includes("APIs")} onChange={handleTopics} /> APIs</label>
                    </div>
                </div>

                <button type="submit" className='bg-purple-600 text-white py-3 rounded hover:bg-purple-700 mt-5'>
                    Submit Feedback
                </button>
            </form>
        </section>
    );
};

export default C4;
