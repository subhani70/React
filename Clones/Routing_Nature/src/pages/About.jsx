import React from 'react'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <div
                className="h-[58vh] bg-cover bg-center bg-no-repeat relative text-center text-white"
                style={{
                    backgroundImage: `url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/header-hero-1.jpg")`,
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 h-[58vh] bg-black opacity-30 z-0"></div>
                <div className="relative flex flex-col items-center justify-center h-full px-4">
                    <h2 className="text-[75px] mt-5">about us</h2>
                </div>
            </div>
            <section>
                <div className="flex flex-col items-center justify-center py-20 px-4">
                    <p className="text-3xl text-[#5c6847] font-normal text-center max-w-4xl leading-snug">
                        We’re a highly collaborative and supportive team,<br />
                        coming together on every project to ensure our<br />
                        clients get the very best result.
                    </p>
                </div>
            </section>
            <section>
                <div className="hidden md:block">
                    <div className="w-full">
                        <img
                            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/contact-hero.jpg"
                            alt="Mountain Goat"
                            className="w-[80vw] mx-auto h-[75vh] object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8 text-center px-[10vw] py-16 text-[#5e6e51]">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-base leading-relaxed">
                                Build the best product that creates the most value for our customers,
                                use business to inspire and implement environmentally friendly
                                solutions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                            <p className="text-base leading-relaxed">
                                We strive to go above and beyond for our clients no matter the
                                challenge. We aim to deliver our very best work every single day across
                                our services.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <div className=" flex h-[60vh] flex-col items-center py-20 bg-gray-50">
                <svg className="mb-3" width="108" height="108" fill="none" viewBox="0 0 48 48">
                    <text x="12" y="36" fontSize="48" fill="#A7BFA5" fontFamily="serif">“</text>
                </svg>
                <p className="text-[30px] text-green-900 font-light text-center max-w-4xl mb-4">
                    “Love Nature has an amazing team of hard working <br />professionals. It has been a pleasure to meet them.”
                </p>
                <div className="flex flex-col items-center">
                    <div style={{ backgroundImage: `url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_on_home.png")` }} className="bg-center w-16 h-16 rounded-full flex items-center justify-center mb-2">

                    </div>
                    <span className="text-green-900 font-medium text-lg">Jane Miller</span>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About