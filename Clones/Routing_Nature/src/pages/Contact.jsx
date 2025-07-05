import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <div
                className="h-[58vh] bg-cover bg-center bg-no-repeat relative text-center text-white"
                style={{
                    backgroundImage: `url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/contact-hero-1.jpg")`,
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 h-[58vh] bg-black opacity-30 z-0"></div>
                <div className="relative flex flex-col items-center justify-center h-full px-4">
                    <h2 className="text-[75px] mt-5">contact us</h2>
                </div>
            </div>
            <section>
                <div className="flex justify-between px-[250px] py-24 bg-white text-[#445c3c]">
                    <div className="max-w-md space-y-10">
                        <h2 className="text-4xl font-light text-[#3d4d2f]">You can find us at</h2>

                        <div>
                            <h4 className="uppercase text-xs tracking-widest mb-1">Email</h4>
                            <p className="text-lg">hello@tyler.com</p>
                        </div>

                        <div>
                            <h4 className="uppercase text-xs tracking-widest mb-1">Phone Number</h4>
                            <p className="text-lg">202–555–0188</p>
                        </div>

                        <div>
                            <h4 className="uppercase text-xs tracking-widest mb-1">Location</h4>
                            <p className="text-lg">2360 Hood Avenue, San Diego, CA, 92123</p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {/* icons */}
                            <div className="bg-[#5e6e51] rounded-full w-10 h-10 flex items-center justify-center text-white">
                            </div>
                            <div className="bg-[#5e6e51] rounded-full w-10 h-10 flex items-center justify-center text-white">
                            </div>
                            <div className="bg-[#5e6e51] rounded-full w-10 h-10 flex items-center justify-center text-white">
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <h2 className="text-4xl font-light text-[#3d4d2f] mb-10">Let's get in touch</h2>
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border-b border-gray-300 focus:outline-none py-2"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border-b border-gray-300 focus:outline-none py-2"
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full border-b border-gray-300 focus:outline-none py-2"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-yellow-400 text-[#3d4d2f] px-6 py-3 rounded-sm hover:bg-yellow-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </section>

            <section class="py-16 bg-[#f6f8f5] text-center">
                <h2 class="text-3xl font-serif text-[#3b5d39] mb-12">
                    We are optimists who love to<br />work together
                </h2>

                <div class="grid grid-cols-4 gap-6 justify-center max-w-6xl mx-auto px-4">
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_1.jpg" alt="Team Member 1" class="w-full rounded" />
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_2.jpg" alt="Team Member 2" class="w-full rounded" />
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_3.jpg" alt="Team Member 3" class="w-full rounded" />
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_4.jpg" alt="Team Member 4" class="w-full rounded" />
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Contact