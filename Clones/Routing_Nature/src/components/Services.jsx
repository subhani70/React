import React from 'react'

const Services = () => {
    return (
        <>
            <div className="flex flex-col items-center py-16 bg-white min-h-screen">
                <h2 className="text-4xl font-medium text-green-900 mb-2">Our Services</h2>
                <div className="w-16 h-1 bg-yellow-400 mb-12 rounded"></div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center">
                    <div className="flex flex-col items-center max-w-xs">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                            alt="Web Design"
                            className="w-80 h-96 object-cover rounded shadow-lg mb-6"
                        />
                        <h3 className="text-2xl font-medium text-green-900 mb-2">Web Design</h3>
                        <p className="text-gray-600 text-lg text-center">
                            Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                        </p>
                    </div>
                    <div className="flex flex-col items-center max-w-xs">
                        <img
                            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                            alt="Graphic Design"
                            className="w-80 h-96 object-cover rounded shadow-lg mb-6"
                        />
                        <h3 className="text-2xl font-medium text-green-900 mb-2">Graphic Design</h3>
                        <p className="text-gray-600 text-lg text-center">
                            Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                        </p>
                    </div>
                    <div className="flex flex-col items-center max-w-xs">
                        <img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
                            alt="Content Creation"
                            className="w-80 h-96 object-cover rounded shadow-lg mb-6"
                        />
                        <h3 className="text-2xl font-medium text-green-900 mb-2">Content Creation</h3>
                        <p className="text-gray-600 text-lg text-center">
                            Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center py-20 bg-gray-50">
                <svg className="mb-6" width="108" height="108" fill="none" viewBox="0 0 48 48">
                    <text x="12" y="36" fontSize="48" fill="#A7BFA5" fontFamily="serif">“</text>
                </svg>
                <p className="text-[30px] text-green-900 font-light text-center max-w-4xl mb-8">
                    “Original and with an innate understanding of their customer’s needs, the team at Love Nature are always a pleasure to work with.”
                </p>
                <div className="flex flex-col items-center">
                    <div style={{ backgroundImage: `url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_on_home.png")` }} className="bg-center w-16 h-16 rounded-full flex items-center justify-center mb-2">

                    </div>
                    <span className="text-green-900 font-medium text-lg">Jane Miller</span>
                </div>
            </div>
            <section className="min-h-screen flex flex-row items-center justify-center px-[10vw] py-16 bg-white">
                <div className="w-1/2 text-left space-y-6">
                    <p className="text-sm uppercase text-gray-500 tracking-wide">About Us</p>
                    <h2 className="text-5xl font-light leading-tight text-green-900">
                        Tell website visitors who you are <br />
                        and why they should choose your business.
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Because when a visitor first lands on your website, you're a stranger to them.
                        They have to get to know you in order to want to read your blog posts,
                        subscribe to your email newsletter, or buy what you're selling.
                    </p>
                    <button className="mt-4 px-6 py-3 border border-gray-300 hover:bg-gray-100 transition rounded text-gray-700">
                        Find Out More
                    </button>
                </div>

                <div className="w-1/2 mt-0 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458"
                        alt="Leaf in hand"
                        className="rounded-md h-[500px] w-[300px] object-cover"
                    />
                </div>
            </section>
            <section
                className="hidden md:flex h-[60vh] bg-cover bg-center items-center justify-center text-center px-4"
                style={{
                    backgroundImage: `url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/footer-hero-mobile.jpg')`,
                }}
            >
                <div>
                    <h1 className="text-[56px] font-light text-[#536942] mb-6 tracking-wide">
                        QUESTIONS?
                    </h1>

                    <p className="text-[18px] text-[#4a4a4a] leading-relaxed mb-8">
                        Whether you’re curious about features, a free trial, or <br />
                        even press, we’re here to answer any questions.
                    </p>

                    <button className="bg-[#fdd835] hover:bg-yellow-400 text-[#906942] px-6 py-3 rounded text-[16px] font-medium transition">
                        Let’s Talk Now
                    </button>
                </div>
            </section>
        </>
    )
}

export default Services
