import React from 'react'
import './Info.css'
const Info = () => {
    return (
        <>
            <div className="container">
                <div className='left'>
                    <div className='steps'>
                        <div className='sno selected'>1</div>
                        <div className='rightcontent'>
                            <h4>Step 1</h4>
                            <h3>your info</h3>
                        </div>
                    </div>
                    <div className='steps'>
                        <div className='sno'>2</div>
                        <div className='rightcontent'>
                            <h4>Step 2</h4>
                            <h3>select plan</h3>
                        </div>
                    </div>
                    <div className='steps'>
                        <div className='sno'>3</div>
                        <div className='rightcontent'>
                            <h4>Step 3</h4>
                            <h3>add-ons</h3>
                        </div>
                    </div>
                    <div className='steps'>
                        <div className='sno'>4</div>
                        <div className='rightcontent'>
                            <h4>Step 4</h4>
                            <h3>summary</h3>
                        </div>
                    </div>

                </div>
                <div className='right' >
                    <div>
                        <h1>Personal info</h1>
                        <p>Please provide your name,email,address, and phone number</p></div>
                    <div>
                        <h3>Name</h3>
                        <input type="text" placeholder='e.g Stephen' />
                    </div>
                    <div>
                        <h3>Email Address</h3>
                        <input type="text" placeholder='e.g Stephen@gmail.com' />
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <input type="text" placeholder='e.g 123456789' />
                    </div>

                    <button>Next Stop</button>
                </div>
            </div>
        </>
    )
}

export default Info