import React from 'react'
import Footer from '../components/Footer'

const Services = () => {
    return (
        <>
            <div
                className="h-[58vh] bg-cover bg-center bg-no-repeat relative text-center text-white"
                style={{
                    backgroundImage: `url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2025/06/ales-krivec-N-aTikX-b00-unsplash.jpg")`,
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 h-[58vh] bg-black opacity-30 z-0"></div>
                <div className="relative flex flex-col items-center justify-center h-full px-4">
                    <h2 className="text-[75px] mt-5">our services</h2>
                </div>
            </div>
            <section>
                <div className="flex items-center justify-center px-20 py-16 gap-16">
                    <div className="w-[400px] flex-shrink-0">
                        <img
                            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-1.jpg"
                            alt="Web Design Service"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="max-w-xl text-[#5e6e51]">
                        <h2 className="text-3xl font-light mb-6">Web Design</h2>
                        <p className="mb-4 leading-relaxed">
                            Tell your visitor how your service can improve their life. Connect with
                            the problem that they’re trying to solve and address any objections you
                            think they might have.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            What is the biggest benefit your customer will get from this? Keep your
                            target audience in mind.
                        </p>

                        <p className="text-xl font-medium mb-4">From $99</p>

                        <button className="border border-[#5e6e51] px-6 py-2 text-[#5e6e51] hover:bg-[#5e6e51] hover:text-white transition">
                            Start a Project
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-center px-20 py-16 gap-16">
                    <div className="w-[400px] flex-shrink-0">
                        <img
                            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-2.jpg"
                            alt="Graphic Design Service"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="max-w-xl text-[#5e6e51]">
                        <h2 className="text-3xl font-light mb-6">Graphic Design</h2>
                        <p className="mb-4 leading-relaxed">
                            Tell your visitor how your service can improve their life. Connect with
                            the problem that they’re trying to solve and address any objections you
                            think they might have.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            What is the biggest benefit your customer will get from this? Keep your
                            target audience in mind.
                        </p>

                        <p className="text-xl font-medium mb-4">From $99</p>

                        <button className="border border-[#5e6e51] px-6 py-2 text-[#5e6e51] hover:bg-[#5e6e51] hover:text-white transition">
                            Start a Project
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center px-20 py-16 gap-16">
                    <div className="w-[400px] flex-shrink-0">
                        <img
                            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-2.jpg"
                            alt="Content Creation Service"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="max-w-xl text-[#5e6e51]">
                        <h2 className="text-3xl font-light mb-6">Content Creation</h2>
                        <p className="mb-4 leading-relaxed">
                            Tell your visitor how your service can improve their life. Connect with
                            the problem that they’re trying to solve and address any objections you
                            think they might have.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            What is the biggest benefit your customer will get from this? Keep your
                            target audience in mind.
                        </p>

                        <p className="text-xl font-medium mb-4">From $99</p>

                        <button className="border border-[#5e6e51] px-6 py-2 text-[#5e6e51] hover:bg-[#5e6e51] hover:text-white transition">
                            Start a Project
                        </button>
                    </div>
                </div>

            </section>
            <section>
                <div className="hidden md:flex justify-between px-[200px] py-20 bg-[#f5f7f4] text-[#5e6e51]">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-light mb-14">Why Love Nature</h2>
                        <p className="mb-14 leading-relaxed">
                            Your customers just learned what services you offer. Tell them why they
                            should work with you or your team, for example you could highlight your
                            experience and positive client reviews.
                        </p>
                        <p className="leading-relaxed">
                            The badges illustrate this. We also focus on key benefits they will get
                            while using our services, namely quick turnaround times and dedicated
                            support. You could also use them to show awards you won for your best
                            work.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-16 gap-y-10 items-start">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white rounded-full p-6 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#5e6e51]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.794 8.618H3.236L8.221 13.062L6.016 19.68L12 15.236L17.984 19.68L15.779 13.062L20.764 8.618H14.206L12 2Z" /></svg>
                            </div>
                            <span>8 Years Experience</span>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white rounded-full p-6 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#5e6e51]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.268L12 18.896l-7.417 4.967L6 15.595 0 9.748l8.332-1.73L12 .587z" /></svg>
                            </div>
                            <span>5 Star Rating</span>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white rounded-full p-6 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#5e6e51]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M20 20v-5h-.581M5 9a7 7 0 0111.882-4.118M19 15a7 7 0 01-11.883 4.118" /></svg>
                            </div>
                            <span>Quick Turnaround</span>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white rounded-full p-6 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#5e6e51]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17.5c-.82 0-1.5-.68-1.5-1.5S11.18 16.5 12 16.5s1.5.68 1.5 1.5S12.82 19.5 12 19.5zm1-4.5h-2V7h2v8z" /></svg>
                            </div>
                            <span>Dedicated Support</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services