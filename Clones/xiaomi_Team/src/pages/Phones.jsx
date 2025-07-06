import React from 'react'

const Phones = () => {
    const phones = [
        {
            name: "Redmi Note 14 Pro+ 5G",
            price: "₹27,999",
            original: "₹33,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/329_item_in/11/04/2025/2a9e8ffe9a3772b764bc3b9cb4e83576.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Note 14 Pro 5G",
            price: "₹22,999",
            original: "₹28,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/967_item_in/05/06/2025/ee5cad2035d1acc137888bb01af9cc1d.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Note 14 5G",
            price: "₹16,999",
            original: "₹22,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/528_item_in/05/06/2025/914f4ba2c850b66eb0526c816f724c2c.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi A5",
            price: "₹6,499",
            original: "₹6,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/60_item_in/11/07/2024/ce940cd17384789d29ef4259f88b69ae.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi 14C 5G",
            price: "₹9,499",
            original: "₹12,999",
            badge: "NEW",
            note: "Special Exchange Bonus upto ₹5,000",
            image: "https://i03.appmifile.com/738_item_in/21/01/2025/d8f5a301a8af8c815d4889b5cd9171f8.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi A4 5G",
            price: "₹8,499",
            original: "₹9,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/29_item_in/05/06/2025/778987a4eb7fc8fb6297839c15af90eb.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi 13 5G",
            price: "₹12,499",
            original: "₹14,999",
            badge: "NEW",
            note: "108MP Triple Camera Setup",
            image: "https://i03.appmifile.com/29_item_in/06/01/2025/95acf558eae2c8a52b1cd7d79207f3b7.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Note 14 Pro+ 5G 12 GB 512 GB + Redmi Watch",
            price: "₹34,999",
            original: "₹44,998",
            badge: "22% off",
            freebie: "Redmi Watch 5 Active",
            image: "https://i03.appmifile.com/979_item_in/17/12/2024/d065316191be257a48fb7516d78e6662.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Note 14 Pro 5G 128 GB + Redmi Buds",
            price: "₹—",
            original: "₹—",
            badge: "NEW",
            freebie: "Redmi Buds 5",
            image: "https://i03.appmifile.com/201_item_in/17/12/2024/0321927c81d71d28eb19b7ac43b4c86d.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Note 14 Pro+ 5G 8 GB 128 GB + Redmi Buds",
            price: "₹—",
            original: "₹—",
            badge: "NEW",
            freebie: "Redmi Buds 5",
            image: "https://i03.appmifile.com/329_item_in/11/04/2025/2a9e8ffe9a3772b764bc3b9cb4e83576.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Redmi Note 14 Pro 5G 256 GB + Redmi Buds",
            price: "₹—",
            original: "₹—",
            badge: "NEW",
            features: "64MP Camera | 67W Turbo Charge",
            freebie: "Redmi Buds 5",
            image: "https://i03.appmifile.com/967_item_in/05/06/2025/ee5cad2035d1acc137888bb01af9cc1d.png?thumb=1&w=1000&f=webp&q=85"
        }
    ];

    const accessories = [
        {
            name: "Mi Power Adapter",
            price: "₹499",
            original: "₹699",
            badge: "NEW",
            image: "https://i03.appmifile.com/592_item_in/04/07/2024/dd3fe25e6b04ad7f36ade3c4f3cc5720.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi USB Cable",
            price: "₹199",
            original: "₹299",
            badge: "NEW",
            image: "https://i03.appmifile.com/521_item_in/04/07/2024/5c58838804702638055008cf26634bd1.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi 2-in-1 Charger",
            price: "₹899",
            original: "₹1,199",
            badge: "NEW",
            image: "https://i03.appmifile.com/505_item_in/06/07/2024/1ad43711b07289e462f96de05e19801a.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi Power Strip",
            price: "₹1,099",
            original: "₹1,499",
            badge: "NEW",
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1662030859.98545417.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi 3A Cable",
            price: "₹249",
            original: "₹399",
            badge: "NEW",
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1584347658.51432077.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi Adapter Combo",
            price: "₹799",
            original: "₹999",
            badge: "NEW",
            image: "https://i03.appmifile.com/592_item_in/04/07/2024/dd3fe25e6b04ad7f36ade3c4f3cc5720.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi Quick Charge Cable",
            price: "₹299",
            original: "₹499",
            badge: "NEW",
            image: "https://i03.appmifile.com/521_item_in/04/07/2024/5c58838804702638055008cf26634bd1.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi Dual USB Charger",
            price: "₹599",
            original: "₹799",
            badge: "NEW",
            image: "https://i03.appmifile.com/505_item_in/06/07/2024/1ad43711b07289e462f96de05e19801a.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi 4 Port Adapter",
            price: "₹1,299",
            original: "₹1,699",
            badge: "NEW",
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1662030859.98545417.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi Braided Cable",
            price: "₹349",
            original: "₹499",
            badge: "NEW",
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1584347658.51432077.jpg?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi Wireless Adapter",
            price: "₹1,499",
            original: "₹1,999",
            badge: "NEW",
            image: "https://i03.appmifile.com/592_item_in/04/07/2024/dd3fe25e6b04ad7f36ade3c4f3cc5720.png?thumb=1&w=1000&f=webp&q=85"
        },
        {
            name: "Mi Pocket Charger",
            price: "₹1,199",
            original: "₹1,499",
            badge: "NEW",
            image: "https://i03.appmifile.com/521_item_in/04/07/2024/5c58838804702638055008cf26634bd1.png?thumb=1&w=1000&f=webp&q=85"
        }
    ];

    const services = [
        {
            title: "Mi Screen Protect",
            description: "Screen Protection against Accidental, Liquid Damage Avail 2 Claims Per year | Use Code Techshield25, to avail 25% off",
            image: "https://i03.appmifile.com/781_operator_in/08/12/2022/22fab0063071b5db457146f5b1324b76.jpg"
        },
        {
            title: "Mi Complete Protect",
            description: "Safeguard your smartphone Against Accidental & Liquid Damages Use Code Techshield25, to avail 25% off",
            image: "https://i03.appmifile.com/170_operator_in/17/11/2022/82fedea7a46e8764e69fc726a8d76752.png"
        },
        {
            title: "Smartphone Quality",
            description: "We are committed to provide the best quality at an honest price.",
            image: "https://i03.appmifile.com/164_operator_in/18/11/2022/499a4881d1d34e3c93ad0ef14b98d410.png"
        },
        {
            title: "Xiaomi Exchange",
            description: "Exchange your old Smart Phone in three simple steps",
            image: "https://i03.appmifile.com/534_operator_in/18/11/2022/7fd852381d5ea477ca830209bc26bef5.png"
        }
    ];
   



    return (
        <>
            <div className='bg-[#f7f7f7]'>
                <div className="w-full bg-[#f7f7f7]">
                    <div className="pt-8 pb-4 flex flex-col items-center bg-[#f7f7f7]">
                        <h1 className="text-4xl font-semibold text-gray-900 ">Xiaomi</h1>
                        <button className="bg-black text-white px-6 py-2 mb-10 rounded-full font-medium hover:bg-gray-800 transition">
                            All Xiaomi Phones
                        </button>
                    </div>
                    <div className="relative w-full h-[70vh] px-10 bg-black flex items-center">
                        <img
                            src="https://i03.appmifile.com/749_operator_in/02/05/2025/d48cdcc6f8cdcb9a11b0438dc3b76eb5.png?thumb=1&w=5120&f=webp&q=85"
                            alt="Xiaomi 15 Ultra"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="relative z-10 flex flex-col justify-center h-full pl-16 max-w-xl">
                            <h2 className="text-white text-5xl font-bold mb-4">Xiaomi 15 Ultra</h2>
                            <p className="text-white text-xl mb-1">Pinnacle of Mobile Optics</p>
                            <p className="text-white text-lg mb-6">Save ₹4,396 with Mi Points</p>
                            <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold text-lg shadow hover:bg-gray-100 transition w-fit">
                                Buy Now
                            </button>

                        </div>
                    </div>
                </div>
                {/* first 3  */}
                <section className="flex h-full  gap-8 px-8 py-16   bg-[#f7f7f7]">
                    {/* Xiaomi 15 Ultra */}
                    <div className="flex flex-col hover:shadow-2xl gap-5  w-[45vw]  items-center bg-white rounded-2xl shadow p-8">
                        <h2 className="text-3xl mt-9  font-bold mb-2 text-gray-900">Xiaomi 15 Ultra</h2>
                        <p className="text-2xl font-semibold mb-2 text-gray-800">₹1,09,999</p>
                        <div className="flex gap-4 mb-6">
                            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                                Buy now
                            </button>
                            <button className="border border-black text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                                Learn More
                            </button>
                        </div>
                        <img
                            src="https://i03.appmifile.com/783_item_in/17/03/2025/d8ecae0f2ed29d943d83c44afac14873.png?thumb=1&w=1000&f=webp&q=85"
                            alt="Xiaomi 15 Ultra"
                            className="w-56 h-56 object-contain"
                        />
                    </div>
                    {/* Xiaomi 15 */}
                    <div className="flex flex-col hover:shadow-2xl gap-5 items-center bg-white rounded-2xl shadow p-8 relative">
                        <span className="absolute top-6 left-6 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">18% off</span>
                        <h2 className="text-3xl font-bold mt-9 mb-2 text-gray-900">Xiaomi 15</h2>
                        <div className="flex items-baseline gap-2 mb-2">
                            <p className="text-2xl font-semibold text-gray-800">₹64,999</p>
                            <span className="text-gray-400 line-through text-lg">₹79,999</span>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                                Buy now
                            </button>
                            <button className="border border-black text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                                Learn More
                            </button>
                        </div>
                        <img
                            src="https://i03.appmifile.com/327_item_in/06/08/2024/784824caf4ebe3e6cef22a2c34de5e66.jpg?thumb=1&w=1000&f=webp&q=85"
                            alt="Xiaomi 15"
                            className="w-56 h-56 object-contain"
                        />
                    </div>
                    {/* Xiaomi 14 CIVI */}
                    <div className="flex flex-col hover:shadow-2xl gap-5 items-center bg-white rounded-2xl shadow p-8 relative">
                        <span className="absolute top-6 left-6 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">32% off</span>
                        <h2 className="text-3xl mt-9 font-bold mb-2 text-gray-900">Xiaomi 14 CIVI</h2>
                        <div className="flex items-baseline gap-2 mb-2">
                            <p className="text-2xl font-semibold text-gray-800">₹36,999</p>
                            <span className="text-gray-400 line-through text-lg">₹54,999</span>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                                Buy now
                            </button>
                            <button className="border border-black text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                                Learn More
                            </button>
                        </div>
                        <img
                            src="https://i03.appmifile.com/305_item_in/11/03/2025/2d4702802a20bba096cbe741814ae87b.png?thumb=1&w=1000&f=webp&q=85"
                            alt="Xiaomi 14 CIVI"
                            className="w-56 h-56 object-contain"
                        />
                    </div>
                </section>

                <section className="relative w-full h-[60vh] rounded-2xl overflow-hidden mt-12 flex items-center bg-[#f8f5ef]">
                    <img
                        src="https://i03.appmifile.com/866_operator_in/16/04/2025/c8edb2200ae77d6c3f5b8940ad2eb484.png?thumb=1&w=5120&f=webp&q=85"
                        alt="Redmi A5 Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: 'center' }}
                    />
                    <div className="relative z-10 flex flex-col justify-center h-full pl-24 max-w-xl">
                        <h2 className="text-gray-900 text-5xl font-bold mb-4">Redmi A5</h2>
                        <p className="text-gray-800 text-xl mb-1">Free Charger Worth ₹799</p>
                        <p className="text-gray-700 text-lg mb-6">Starting only at ₹6,499 (1 unit)</p>
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

                <section >
                    <div className="pt-8 pb-4 flex flex-col items-center bg-[#f7f7f7]">
                        <h1 className="text-4xl font-semibold text-gray-900 mb-4">Redmi</h1>
                        <button className="bg-black text-white px-6 py-2 mb-10 rounded-full font-medium hover:bg-gray-800 transition">
                            All Redmi Phones
                        </button>
                    </div>
                </section>

                {/* <section>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 py-16 bg-white">
            {phones.map((phone, index) => (
                <div
                    key={index}
                    className="flex flex-col hover:shadow-2xl gap-4 items-center bg-white rounded-2xl shadow p-6 relative"
                >
                    {phone.badge && (
                        <span className="absolute top-4 left-4 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {phone.badge}
                        </span>
                    )}
                    <h2 className="text-lg font-bold mt-8 text-center text-gray-900">
                        {phone.name}
                    </h2>
                    {phone.note && (
                        <p className="text-sm text-gray-600 text-center -mt-2">{phone.note}</p>
                    )}
                    <div className="flex items-baseline gap-2 text-center">
                        <p className="text-xl font-semibold text-gray-800">{phone.price}</p>
                        <span className="text-gray-400 line-through text-sm">{phone.original}</span>
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
                        src={phone.image}
                        alt={phone.name}
                        className="w-40 h-40 object-contain"
                    />
                </div>
            ))}
        </section>
        </section> */}

                <section className="grid  grid-cols-4 gap-8 px-8 py-16 bg-[#f7f7f7]">
                    {phones.map((phone, index) => (
                        <div
                            key={index}
                            className={`flex flex-col h-[70vh] hover:shadow-2xl gap-4 items-center bg-white rounded-2xl shadow p-6 relative ${index === 0 ? 'sm:col-span-2' : ''
                                }`}
                        >
                            {phone.badge && (
                                <span className="absolute top-4 left-4 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                                    {phone.badge}
                                </span>
                            )}
                            <h2 className="text-lg font-bold mt-8 text-center text-gray-900">
                                {phone.name}
                            </h2>
                            {phone.note && (
                                <p className="text-sm text-gray-600 text-center -mt-2">{phone.note}</p>
                            )}
                            <div className="flex items-baseline gap-2 text-center">
                                <p className="text-xl font-semibold text-gray-800">{phone.price}</p>
                                <span className="text-gray-400 line-through text-sm">{phone.original}</span>
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
                                src={phone.image}
                                alt={phone.name}
                                className="w-40 h-40 object-contain"
                            />
                        </div>
                    ))}
                </section>
                <h2 className="text-4xl text-center font-bold  text-gray-900 px-8  bg-[#f7f7f7]"> Phone Accesories</h2>

                <section className="grid grid-cols-4 gap-8 px-8 py-16 bg-[#f7f7f7]">
                    {accessories.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-[70vh] hover:shadow-2xl gap-4 items-center bg-white rounded-2xl shadow p-6 relative"
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
                                className="w-40 h-40 object-contain"
                            />
                        </div>
                    ))}
                </section>

                <h2 className="text-4xl text-center font-bold  text-gray-900 px-8  bg-[#f7f7f7]"> Our Services</h2>
                <h2 className="text-sm mt-2 pb-9 text-center   text-gray-900 px-8  bg-[#f7f7f7]">Trusted. Secure. Reliable</h2>


                <div>
                    <section className="grid grid-cols-2 gap-6 px-6 py-12 bg-[#f7f7f7]">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white h-[50vh] rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition"
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-2">
                                    {service.title}
                                    <span className="ml-1 text-black font-bold">&gt;</span>
                                </h3>
                                <p className="text-lg text-gray-600 mb-4 max-w-sm">{service.description}</p>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-30 h-30 object-contain mt-auto"
                                />
                            </div>
                        ))}
                    </section>

                </div>

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
        </>
    )
}

export default Phones
