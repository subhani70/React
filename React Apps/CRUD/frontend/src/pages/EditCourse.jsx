import React, { } from 'react'
import { useState } from 'react';
import { useLocation, useNavigate, useParams, } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditCourse = () => {

    // let [singleCourse, setSingleCourse] = useState()


    let { id } = useParams()
    let loc = useLocation();

    console.log(loc.state);
    let { title: coursetitle, duration: cduration, trainers: ctrainers, subjects: asubjects, fees: fee, location: address, img: imgurl } = loc.state



    let navigate = useNavigate();
    const [title, setTitle] = useState(coursetitle);
    const [trainers, setTrainers] = useState(ctrainers);
    const [subjects, setSubjects] = useState(asubjects);
    const [fees, setFees] = useState(fee);
    const [duration, setDuration] = useState(cduration);
    const [location, setLocation] = useState(address)
    const [img, setImg] = useState(imgurl);

    const handleTrainerChange = (index, value) => {
        const updated = [...trainers];
        updated[index] = value;
        setTrainers(updated);
    };

    const addTrainerField = () => {
        setTrainers([...trainers, '']);
    };

    const handleSubjectChange = (index, value) => {
        const updated = [...subjects];
        updated[index] = value;
        setSubjects(updated);
    };

    const addSubjectField = () => {
        setSubjects([...subjects, '']);
    };

    console.log(title);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title,
            trainers: trainers.filter(Boolean),
            subjects: subjects.filter(Boolean),
            fees,
            duration,
            location,
            img
        };

        console.log(data);

        const res = await fetch(`http://localhost:3000/courses/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        navigate("/allCourses")
        setTitle('');
        setTrainers(['']);
        setSubjects(['']);
        setFees('');
        setDuration('');
        setLocation('');
        setImg('');
        // const result = await res.json();
        // console.log('Course created:', result);
        toast.success("course updated successfully");
    };


    return (
        <section className='bg-gray-700 text-white w-[600px] mx-auto mt-10 rounded-2xl px-10 py-10'>
            <h1 className='text-4xl text-center mb-6'>Edit Course</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

                <input type="text" placeholder="Course Title" value={title} onChange={(e) => setTitle(e.target.value)}
                    className='bg-white text-black px-3 py-2 rounded' />

                <div>
                    <label className='block mb-2 text-lg'>Trainers</label>
                    {trainers.map((trainer, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Trainer ${index + 1}`}
                            value={trainer}
                            onChange={(e) => handleTrainerChange(index, e.target.value)}
                            className='bg-white text-black px-3 py-2 rounded mb-2 w-full'
                        />
                    ))}
                    <button type="button" onClick={addTrainerField} className='text-blue-300 underline mt-1'>+ Add Trainer</button>
                </div>

                <div>
                    <label className='block mb-2 text-lg'>Subjects</label>
                    {subjects.map((subject, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Subject ${index + 1}`}
                            value={subject}
                            onChange={(e) => handleSubjectChange(index, e.target.value)}
                            className='bg-white text-black px-3 py-2 rounded mb-2 w-full'
                        />
                    ))}
                    <button type="button" onClick={addSubjectField} className='text-blue-300 underline mt-1'>+ Add Subject</button>
                </div>

                <input type="number" placeholder="Fees" value={fees} onChange={(e) => setFees(e.target.value)}
                    className='bg-white text-black px-3 py-2 rounded' />

                <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)}
                    className='bg-white text-black px-3 py-2 rounded' />

                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}
                    className='bg-white text-black px-3 py-2 rounded' />

                <input type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)}
                    className='bg-white text-black px-3 py-2 rounded' />

                <input type="submit" value="Update Course"
                    className='bg-blue-500 px-5 py-3 rounded mt-5 mx-auto w-1/2 cursor-pointer hover:bg-blue-600 transition' />
            </form>
        </section>
    );
}

export default EditCourse;
