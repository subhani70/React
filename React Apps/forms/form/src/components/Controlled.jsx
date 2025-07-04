import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Controlled = () => {
    let [username, setUsername] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [address, setAddress] = useState();
    let [branch, setBranch] = useState();
    let [gender, setGender] = useState();
    let [skills, setSkills] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password, address, branch, gender, skills });
        if (username == "") {
            toast.error("Username is Mandatory")
        } else {
            toast.success("Form submitted Successfully")
        }
        setUsername("");
        setEmail("");
        setPassword("");
        setAddress("");
        setBranch("");
        setGender("");
        setSkills([]);
    }

    const handleChange = (e) => {
        setGender(e.target.value);
    }

    const handleSkills = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        checked ? setSkills([...skills, value]) : setSkills(skills.filter((skill) => skill != value));

    };

    return (
        <>
            <section className='bg-black text-white w-[540px] mx-auto mt-10 rounded-2xl px-10 py-15 '>
                <h1 className='text-5xl text-center'>Controlled Forms</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-9'>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' id='1' className=' outline-0 border-1 rounded px-3 py-2 w-full' />
                    <input type="email" id='2' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' className='outline-0 border-1 rounded px-3 py-2 w-full' />
                    <input type="password" id='3' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className='outline-0 border-1 rounded px-3 py-2 w-full' />

                    <textarea id='4' value={address} placeholder='enter your address' onChange={(e) => setAddress(e.target.value)} className='outline-0 border-1 rounded px-3 py-2 w-full' name="" ></textarea>
                    <div className='flex flex-col '>
                        <label htmlFor="">Select Branch</label>
                        <select value={branch} onChange={(e) => setBranch(e.target.value)} name="" id="5" className='outline-0 border-1 rounded px-3 py-2 w-full'>
                            <option value="CSE" hidden className=' text-red-500'>Choose  Branch</option>
                            <option value="CSE" className=' text-red-500'>CSE</option>
                            <option value="ECE" className=' text-red-500'>ECE</option>
                            <option value="IT" className=' text-red-500'>IT</option>
                        </select>
                    </div>

                    <div>
                        <div className='text-xl '>Select Gender</div>
                        <div className='flex gap-3'>
                            <input type="radio" name='gender' onChange={handleChange} value="Male" checked={gender == "Male"} />Male
                            <input type="radio" name='gender' onChange={handleChange} value="FeMale" checked={gender == "FeMale"} />FeMale
                            <input type="radio" name='gender' onChange={handleChange} value="Other" checked={gender == "Other"} />Other
                        </div>
                    </div>

                    <div>
                        <h1>Select Skills</h1>
                        <div className='flex gap-2.5'>
                            <input type="checkbox" onChange={handleSkills} checked={skills.includes("css")} value="css" />css
                            <input type="checkbox" onChange={handleSkills} checked={skills.includes("HTML")} value="HTML" />HTML
                            <input type="checkbox" onChange={handleSkills} checked={skills.includes("JS")} value="JS" />JS
                        </div>
                    </div>
                    <input type="submit" value="submit" className='bg-blue-500 px-5 py-3 rounded mt-5 mx-auto w-1/2' />
                </form>
            </section>
        </>
    )
}

export default Controlled