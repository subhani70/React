let Tablets = () => {
    const tablets = [
        {
            name: "Redmi Pad 2",
            price: "₹15,999",
            original: "₹20,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/953_item_in/16/06/2025/b90889ab567040b1cfba15a97c54360c.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Pad 2 Wifi + Cellular",
            price: "₹15,999",
            original: "₹20,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/953_item_in/16/06/2025/b90889ab567040b1cfba15a97c54360c.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Xiaomi Pad 7",
            price: "From ₹27,999",
            original: "₹34,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/826_item_in/20/09/2024/377a210d58d4034e4d5a49d37f51355a.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Xiaomi Pad 6",
            price: "From ₹18,999",
            original: "₹26,999",
            badge: "NEW",
            outOfStock: true,
            image: "https://i03.appmifile.com/826_item_in/20/09/2024/377a210d58d4034e4d5a49d37f51355a.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Pad Pro 5G",
            price: "From ₹24,999",
            original: "₹28,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/993_item_in/24/07/2024/c703c358336b791d0a75523e7bda954b.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Pad SE 4G",
            price: "From ₹10,999",
            original: "₹13,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/891_item_in/24/07/2024/0c9d82a2bf77824a9639f7827fad16a9.png?thumb=1&w=1000&f=webp&q=85"
        }
    ];

    const accessories = [
        {
            name: 'Xiaomi Power Bank',
            price: '₹1,199',
            original: '₹1,499',
            badge: 'HOT',
            image: 'https://i03.appmifile.com/774_item_in/10/01/2025/aff4df750af9e259ff57fb02361b7731.jpg?thumb=1&w=1000&f=webp&q=85',
        },
        {
            name: 'Mi 18W Fast Charger',
            price: '₹499',
            original: '₹699',
            badge: 'SALE',
            image: 'https://i03.appmifile.com/469_item_in/12/06/2023/98e8bbded166e99011684f41b417c8ee.jpg?thumb=1&w=1000&f=webp&q=85',
        },
        {
            name: 'Xiaomi Type-C Cable',
            price: '₹199',
            original: '₹299',
            badge: 'NEW',
            image: 'https://i03.appmifile.com/208_item_in/04/07/2024/0caa372f65852c4713f266d23f832b09.png?thumb=1&w=1000&f=webp&q=85',
        },
    ];

    return <div className="bg-[#f7f7f7]">
        <section className="w-full">
            <div className="py-8 flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-black">Tablets</h1>
            </div>

            <div className="relative w-full h-[75vh] px-10 flex items-center justify-start bg-gray-100">
                <img
                    src="https://i03.appmifile.com/863_operator_in/02/06/2025/7143eae2ae4b02fa93663d4bfbdf4147.png?thumb=1&w=5120&f=webp&q=85"
                    alt="Xiaomi Pad 7"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 flex flex-col justify-center h-full pl-8 md:pl-16 max-w-xl text-left">
                    <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">Xiaomi Pad 7</h2>
                    <p className="text-black text-lg md:text-xl mb-1">Nano Texture Display</p>
                    <p className="text-black text-md md:text-lg mb-6">Starting from ₹30,999*</p>
                    <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition w-fit">
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
        <section className="grid grid-cols-2 gap-8 px-8 pt-16 bg-[#f7f7f7]">
            {tablets.map((tab, index) => (
                <div
                    key={index}
                    className="flex flex-col h-[80vh] justify-center hover:shadow-2xl gap-4 items-center bg-white rounded-2xl shadow p-6 relative"
                >
                    {tab.badge && (
                        <span className="absolute top-4 left-4 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {tab.badge}
                        </span>
                    )}

                    <h2 className="text-xl font-bold mt-15 text-center text-gray-900">
                        {tab.name}
                    </h2>

                    <div className="flex items-baseline gap-2 text-center">
                        <p className="text-xl font-semibold text-gray-800">{tab.price}</p>
                        <span className="text-gray-400 line-through text-sm">{tab.original}</span>
                    </div>

                    <div className="flex gap-3 mt-4 mb-4">
                        {!tab.outOfStock ? (
                            <>
                                <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                                    Buy now
                                </button>
                                <button className="border border-black text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                                    Learn More
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="bg-gray-300 text-white px-4 py-1.5 rounded-full text-sm font-medium cursor-not-allowed">
                                    Out of stock
                                </button>
                                <button className="border border-black text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                                    Learn More
                                </button>
                            </>
                        )}
                    </div>

                    <img
                        src={tab.image}
                        alt={tab.name}
                        className="size-[250px] object-contain"
                    />
                </div>
            ))}
        </section>
        <section className="relative w-full h-[65vh] px-10 rounded-2xl mt-5 overflow-hidden  flex items-center bg-white">
            <img
                src="https://i03.appmifile.com/824_operator_in/05/11/2024/2705da8899eae521b419340b2e460ecb.png?thumb=1&w=5120&f=webp&q=85"
                alt="Xiaomi Pad 6 Banner"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
            />
            <div className="relative z-10 flex flex-col justify-center h-full pl-24 max-w-xl">
                <h2 className="text-gray-900 text-5xl font-bold mb-4">Xiaomi Pad 6</h2>
                <p className="text-gray-800 text-xl mb-1">Your Personal Theatre Experience</p>
                <p className="text-gray-700 text-lg mb-6">At Just ₹18,999*</p>
                <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold text-lg shadow hover:bg-gray-800 transition w-fit">
                    Buy Now
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                <span className="block w-8 h-1 bg-gray-900 rounded-full"></span>
                <span className="block w-8 h-1 bg-gray-300 rounded-full"></span>
                <span className="block w-8 h-1 bg-gray-300 rounded-full"></span>
            </div>
        </section>

        <h2 className="text-4xl text-center font-bold text-gray-900 px-8 bg-[#f7f7f7] mt-10">
            Tablet Accessories
        </h2>

        <section className="grid grid-cols-4 gap-4 px-8 pt-16 pb-4 bg-[#f7f7f7]">
            {accessories.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col h-[70vh] hover:shadow-2xl gap-4 items-center bg-white rounded-md shadow p-6 relative"
                >
                    {item.badge && (
                        <span className="absolute top-4 left-4 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {item.badge}
                        </span>
                    )}
                    <h2 className="text-lg font-bold mt-8 text-center text-gray-900">
                        {item.name}
                    </h2>
                    <div className="flex items-baseline gap-2 text-center">
                        <p className="text-xl font-semibold text-gray-800">{item.price}</p>
                        <span className="text-gray-400 line-through text-sm">{item.original}</span>
                    </div>
                    <div className="flex gap-3 mt-4 mb-4">
                        <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                            Buy now
                        </button>
                        <button className="border border-black text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="size-[200px] object-contain"
                    />
                </div>
            ))}


            <div className=" flex flex-col items-center justify-center bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <h2 className="text-center text-xl font-bold text-gray-900 mb-4 leading-snug">
                    All Tablet <br /> Accessories
                </h2>
                <div className="border-2 border-orange-400 rounded-full p-4">
                    <span className="text-orange-500 text-sm">Go</span>
                </div>
            </div>
        </section>


        <footer className="bg-[#111]  text-white px-8 py-10 text-lg">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-5">
                {/* Section 1: Support */}
                <div>
                    <h3 className="font-bold mb-3">Support</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>Online Help</li>
                        <li>Customer Service</li>
                        <li>Shipping FAQ</li>
                        <li>Warranty</li>
                        <li>Xiaomi Exchange</li>
                        <li>User Guide</li>
                        <li>Laptop Drivers</li>
                        <li>Mi Screen Protect</li>
                        <li>Mi Extended Warranty</li>
                        <li>Mi Complete Protect</li>
                        <li>Certification</li>
                        <li>Service Centre</li>
                        <li>Xiaomi Easy Finance</li>
                        <li>Xiaomi Spotify India</li>
                    </ul>
                </div>

                {/* Section 2: Shop and Learn */}
                <div>
                    <h3 className="font-bold mb-3">SHOP AND LEARN</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>Xiaomi Phones</li>
                        <li>Redmi Phones</li>
                        <li>Tv's</li>
                        <li>Laptops and Tablets</li>
                        <li>Audio</li>
                        <li>Lifestyle</li>
                        <li>Smart Home</li>
                    </ul>
                </div>

                {/* Section 3: Retail Store */}
                <div>
                    <h3 className="font-bold mb-3">RETAIL STORE</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>Mi Home</li>
                        <li>Mi Authorized Store</li>
                        <li>Mi Store Franchise</li>
                    </ul>
                </div>

                {/* Section 4: About Us */}
                <div>
                    <h3 className="font-bold mb-3">ABOUT US</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>Xiaomi</li>
                        <li>Privacy Policy</li>
                        <li>User Agreement</li>
                        <li>Integrity & Compliance</li>
                        <li>CSR and Disclosures</li>
                        <li>E–Waste Management</li>
                        <li>In The Press</li>
                        <li>Trust Center</li>
                        <li>Culture</li>
                        <li>Smartphone Quality</li>
                        <li>TV Quality</li>
                        <li>Service Quality</li>
                        <li>Xiaomi HyperOS</li>
                        <li>Join Our Team</li>
                    </ul>
                </div>

                {/* Section 5: QR Code & Social */}
                <div className="max-w-xs space-y-6">
                    <div>
                        <h3 className="font-bold mb-2">Follow Mi</h3>
                        <div className="flex space-x-4 text-xl">
                            <span className="bg-gray-800 px-2 py-1 rounded-full">📘</span>
                            <span className="bg-gray-800 px-2 py-1 rounded-full">❌</span>
                            <span className="bg-gray-800 px-2 py-1 rounded-full">📸</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-1">Let's stay in touch</h3>
                        <div className="flex items-center border border-gray-500 rounded-full overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="bg-transparent px-4 py-2 text-sm outline-none w-full text-white placeholder:text-gray-400"
                            />
                            <button className="bg-white text-black px-4 py-2 text-sm font-semibold">
                                &gt;
                            </button>
                        </div>
                    </div>

                    <div className="border border-gray-600 rounded-lg overflow-hidden">
                        <div className="flex p-2">
                            <img
                                src="https://www.freepnglogos.com/uploads/qr-code-png/qr-code-blackberry-code-variant-technology-icons-32.png"
                                alt="QR Code"
                                className="w-14 h-14 text-black bg-white"
                            />
                            <div className="ml-3">
                                <p className="font-bold text-white">Get mi store app</p>
                                <p className="text-gray-400 text-xs">
                                    Scan for our up-to-date information for better shopping
                                    experience
                                </p>
                            </div>
                        </div>
                        <div className="bg-black p-2 text-center border-t border-gray-700">
                            <button className="flex items-center gap-2 mx-auto text-white text-sm">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/2048px-Google_Play_Arrow_logo.svg.png"
                                    alt="Google Play"
                                    className="w-5 h-5"
                                />
                                Download on Google play
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 border-t border-gray-800 pt-4 text-gray-400 text-xs flex flex-wrap justify-between items-center">
                <p>Copyright © 2010 - 2025 Xiaomi. All Rights Reserved</p>
                <div className="flex items-center gap-6">
                    <span>Sitemap</span>
                    <span>India / English 🌐</span>
                </div>
            </div>
        </footer>

    </div>
}
export default Tablets