import React, { useRef } from 'react'

const Uncontrolled = () => {
    let userref = useRef();
    let passref = useRef();
    let emailref = useRef();
    let streamRef = useRef();

    let handleSubmit = (e) => {
        e.preventDefault();
        let username = userref.current.value;
        let email = emailref.current.value;
        let password = passref.current.value;
        let select = streamRef.current.value;
        // let details = { username, email, password };
        // console.log(details);

        console.log({ username, email, password, select })

        userref.current.value = "";
        emailref.current.value = "";
        passref.current.value = "";

    }

    return (
        <section className='flex flex-col gap-5 px-15 mb-3 bg-black w-[500px] text-white mx-auto mt-10 rounded-xl p-5'>
            <h1 className='text-4xl font-bold text-center mb-5 mt-4'>Uncontrolled Form</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor="101">Username</label>
                <input ref={userref} className='p-1 outline-0 rounded-lg px-2 border-2 border-white' type="text" id='101' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="2">email</label>
                <input ref={emailref} className='p-1 outline-0 rounded-lg px-2 border-2 border-white' type="email" id='2' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="9">password</label>
                <input ref={passref} className='p-1 outline-0 rounded-lg px-2 border-2 border-white' type="password" id='9' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="stream">Select Branch</label>
                <select name="" ref={streamRef} id="stream" className='p-1 outline-0 rounded-lg px-2 border-2 border-white' >
                    <option className='bg-black' value="select">select</option>
                    <option className='bg-black' value="cse">cse</option>
                    <option className='bg-black' value="it">it</option>
                    <option className='bg-black' value="ece">ece</option>
                </select>
            </div>
            <div>
                <textarea name="" className='p-1 outline-0 rounded-lg px-2 border-2 border-white' id=""></textarea>
            </div>

            <input onClick={handleSubmit} type="submit" className='w-[100px] mx-auto bg-white text-black font-bold rounded-2xl px-5 py-2 mb-4 mt-3' />

        </section>
    )
}

export default Uncontrolled