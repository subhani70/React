import tvbanner1 from "../components/assets/shtvbanner1.webp"
import tvbanner2 from "../components/assets/shtvbanner2.webp"
import tvbanner3 from "../components/assets/shtvbanner3.webp"
import tvbanner4 from "../components/assets/shtvbanner4.webp"

import tv1 from "../components/assets/tv1.webp"
import tv2 from "../components/assets/tv2.webp"
import tv3 from "../components/assets/tv3.webp"
import tv4 from "../components/assets/tv4.webp"
import tv5 from "../components/assets/tv5.webp"
import tv6 from "../components/assets/tv6.webp"
import tv7 from "../components/assets/tv7.webp"
import tv8 from "../components/assets/tv8.webp"
import tv9 from "../components/assets/tv9.webp"
import tv10 from "../components/assets/tv10.webp"
import tv11 from "../components/assets/tv11.webp"

import qled1 from "../components/assets/qled1.webp"
import qled2 from "../components/assets/qled2.webp"

import tv2_1 from "../components/assets/2shtvbanner1.webp"
import tv2_2 from "../components/assets/2shtvbanner2.webp"
import tv2_3 from "../components/assets/2shtvbanner3.webp"
import tv2_4 from "../components/assets/2shtvbanner4.webp"
import tv2_5 from "../components/assets/2shtvbanner5.webp"

import tvaccessories1 from "../components/assets/tvaccessories1.webp"
import tvaccessories2 from "../components/assets/tvaccessories2.webp"
import tvaccessories3 from "../components/assets/tvaccessories3.webp"
import tvaccessories4 from "../components/assets/tvaccessories4.webp"

import vaccum1 from "../components/assets/vaccum1.webp"
import vaccum2 from "../components/assets/vaccum2.webp"

import vaccumbanner1 from "../components/assets/vaccumbanner1.webp"
import vaccumbanner2 from "../components/assets/vaccumbanner2.webp"
import vaccumbanner3 from "../components/assets/vaccumbanner3.webp"
import vaccumbanner4 from "../components/assets/vaccumbanner4.webp"

import airpurifier1 from "../components/assets/airpurifier1.webp"
import airpurifier2 from "../components/assets/airpurifier2.webp"
import airpurifier3 from "../components/assets/airpurifier3.webp"

import camera1 from "../components/assets/camera1.webp"
import camera2 from "../components/assets/camera2.webp"
import camera3 from "../components/assets/camera3.webp"

import light1 from "../components/assets/light1.webp"
import light2 from "../components/assets/light2.webp"
import light3 from "../components/assets/light3.webp"

import reward from "../components/assets/reward.gif"
import warranty from "../components/assets/warranty.png"


import { PiLessThanFill } from "react-icons/pi";
import { PiGreaterThanFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"

const tvbanners = [
    {
        image:tvbanner1,
        title:"Xiaomi Smart TV F32",
        specification:"Starting from ₹11,999*",
        priceStarting:"Sale is Live"
    },
    {
      image:tvbanner2,
      title:"Xiaomi QLED TV FX Pro",
      specification:"FantasiQLED",
      priceStarting:"Starting from ₹25,999* (1 Unit)"
    },
  {
    image:tvbanner3,
    title:"Xiaomi 4K TV FX 2025",
    specification:'Fantastic 4K',
    priceStarting:"Starting from ₹24,499* (1 Unit)"
  },
  {
    image:tvbanner4,
    title:"Xiaomi QLED TV X Pro Series 2025 Edition",
    specification:"Now With Filmmaker Mode",
    priceStarting:"Starting at ₹28,999*"
  }]

  const tvs = [
    {
      image: tv1,
      title: "Xiaomi Smart TV FX Pro QLED 55 (138 cm)",
      originalprice: 69999,
      discount:42
    },
    {
      image: tv2,
      title: "Xiaomi Smart TV FX Pro QLED 43 (108cm)",
      originalprice: 49999,
      discount: 44
    },{
      image: tv3,
      title: "Xiaomi 4K TV FX 55 (138 cm)",
      originalprice: 54999,
      discount:34
    },
    {
      image: tv4,
      title: "Xiaomi 4K TV FX 43 (108cm)",
      originalprice: 42999,
      discount: 38
    },{
      image: tv5,
      title: "Xiaomi Smart TV A Pro QLED 32 (80 cm)",
      originalprice: 26999,
      discount:44
    },
    {
      image: tv6,
      title: "Xiaomi Smart TV A 43 (108cm)",
      originalprice: 34999,
      discount: 37
    },
    {
      image: tv7,
      title: "Xiaomi Smart TV X Pro QLED 65 (164 cm)",
      originalprice: 99999,
      discount:36
    },
    {
      image: tv8,
      title: "Xiaomi Smart TV X Pro QLED 55 (138cm)",
      originalprice: 70999,
      discount: 40
    },{
      image: tv9,
      title: "Xiaomi Smart QLED TV F Pro 55 2025",
      originalprice: 69999,
      discount:45
    },
    {
      image: tv10,
      title: "Xiaomi Smart 4K TV F 43 2025",
      originalprice: 42999,
      discount: 41
    },{
      image: tv11,
      title: "Xiaomi Smart QLED G 32 2025",
      originalprice: 26999,
      discount:48
    },
  ];

  
  const qled = [
    {
      image: qled1,
      title: "Xiaomi Smart TV X Pro QLED 65 (164cm)",
      originalprice: 99999,
      discount:36
    },
    {
      image: qled2,
      title: "Xiaomi Smart TV X Pro QLED 43 (108cm)",
      originalprice: 50999,
      discount: 39
    },
  ];

  
const secondtvbanners = [
    {
        image:tv2_1,
        title:"Xiaomi QLED TV F Pro 55",
        specification:"34W Dolby Audio",
        priceStarting:"Available at ₹35,999* (1 Unit)",
        tap:"Sales is Live"
    },
    {
      image:tv2_2,
      title:"Xiaomi Smart 4K TV F 43",
      specification:"CinematicClarity",
      priceStarting:"Available at ₹22,999* (1 Unit)",
        tap:"Sales is Live"
    },
  {
    image:tv2_3,
    title:"Xiaomi QLED TV A Pro",
    specification:'MagiQLED',
    priceStarting:"Starting at ₹13,499* (1 Unit)",
        tap:"Buy Now"
  },
  {
    image:tv2_4,
    title:"Xiaomi Smart TV A Series 2025",
    specification:"Google TV",
    priceStarting:"Starting at ₹21,999* (1 Unit)",
        tap:"Buy Now"
  },
  {
    image:tv2_5,
    title:"Xiaomi 4K TV X Series 2025",
    specification:'Cinematic 4K',
    priceStarting:"Starting at ₹25,499* (1 Unit)",
        tap:"Buy Now"
  }]

const TvSmartHome = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % tvbanners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [now, setNow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((prev) => (prev + 1) % secondtvbanners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    const tvaccessories = [
    {
      image: tvaccessories1,
      title: "Xiaomi TV Stick 4K",
      originalprice: 5999,
      discount:16
    },
    {
      image: tvaccessories2,
      title: "Mi TV Stick",
      originalprice: 3499,
      discount: 5
    },
    {
      image: tvaccessories3,
      title: "TV 32/32 Pro Wall Mount Black",
      originalprice: 399,
      discount:""
    },
    {
      image: tvaccessories4,
      title: "Xiaomi Bluetooth Voice Remote",
      originalprice: 999,
      discount: 20
    },
  ];
    const vaccum = [
    {
      image: vaccum1,
      title: "Xiaomi Robot Vaccum Cleaner S10",
      originalprice: 34999,
      discount:45
    },
    {
      image: vaccum2,
      title: "Xiaomi Robot Vaccum Cleaner X10",
      originalprice: 59999,
      discount: 50
    },
  ];

const vaccumbanner = [
  {
    image:vaccumbanner1,
    title:"Xiaomi Robot Vaccum Cleaner X10",
    specification:"Pro Cleaning with Auto-dust Collection",
    priceStarting:"Starting at ₹29,999 (1 Unit)"
  },
  {
    image:vaccumbanner2,
    title:"Xiaomi Robot Vaccum Cleaner S10",
    specification:"Powerful Suction,Pro Cleaning",
    priceStarting:"Starting at ₹18,999"
  },
  {
    image:vaccumbanner3,
    title:"Xiaomi Smart Air Purifier 4 Lite",
    specification:"99.99% elimination of 0.1um particles",
    priceStarting:"Starting at ₹9,999"
  },
{
    image:vaccumbanner4,
    title:"Xiaomi 360 Home Security Camera 2K",
    specification:"2K High-Definition Video",
    priceStarting:"Starting at ₹2,799"
  },
  ]

  const [present, setPresent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPresent((prev) => (prev + 1) % vaccumbanner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


      const airpurifiers = [
    {
      image: airpurifier1,
      title: "Xiaomi Smart Air Purifier 4 Lite",
      originalprice: 14999,
      discount:26,
      isAvailable:true
    },
    {
      image: airpurifier2,
      title: "Xiaomi Smart Air Purifier 4 Filter HEPA",
      originalprice: 4199,
      discount: 40,
      isAvailable:true
    },
    {
      image: airpurifier3,
      title: "Xiaomi Smart Air Purifier 4 Lite Filter",
      originalprice: 3499,
      discount: 28,
      isAvailable:true
    },
  ];

  
      const cameras = [
    {
      image: camera1,
      title: `Xiaomi 360\u00B0C Home Security Camera 2K`,
      originalprice: 4999,
      discount:40,
      isAvailable:false 
    },
    {
      image: camera2,
      title: `Mi 360\u00B0C Home Security Camera 2K Pro`,
      originalprice: 5999,
      discount: 25,
      isAvailable:false
    },
    {
      image: camera3,
      title: `Xiaomi 360\u00B0C Home Security Camera 1080p 2i`,
      originalprice: 4499,
      discount: 44,
      isAvailable:false
    },
  ];
      const lights = [
    {
      image: light1,
      title: `Mi Smart LED Bulb(B22)`,
      originalprice: 4999,
      discount:40,
      isAvailable:false 
    },
    {
      image: light2,
      title: `Mi Smart Bedside Lamp 2`,
      originalprice: 5999,
      discount: 25,
      isAvailable:true
    },
    {
      image: light3,
      title: `Mi Smart LED Desk Lamp 1S`,
      originalprice: 4499,
      discount: 44,
      isAvailable:false
    },
  ];


  
      const services = [
    {
      image: reward,
      tap:"Reward Mi>"
    },
    {
      image: warranty,
      tap:"Mi Extended Warranty>"
    },
  ];

  return (
    <section className="w-auto mx-auto px-4 py-8">

      <div className="w-full h-[525px] hover:cursor-pointer">
        <h1 className="text-2xl font-bold mb-6 text-center">TV</h1>
        <div className="w-full flex justify-center">
            <button className="p-2 rounded-xl bg-black text-[#FFFFFF] hover:cursor-pointer">View All</button>
        </div><br />
        <div className="flex">
          <img
            src={tvbanners[current].image}
            alt={`Slide ${current}`}
            className="w-full hover:cursor-pointer h-full object-cover transition-all duration-1000 ease-in-out relative"
          />
          <div className="flex w-[1264px] text-gray-700 text-2xl justify-between mt-[190px] absolute">
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setCurrent((prev) => (prev - 1 + tvbanners.length) % tvbanners.length)}
            >
              <PiLessThanFill />
            </button>
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setCurrent((prev) => (prev + 1) % tvbanners.length)}
            >
              <PiGreaterThanFill />
            </button>
          </div>
          <div className="w-[30%] text-[#FFFFFF] absolute p-7 ml-[7%] mt-[7%]">
              <h1 className="text-3xl font-bold mb-6">{tvbanners[current].title}</h1>
              <h4 className="text-xl">{tvbanners[current].specification}</h4>
              <h4 className="text-xl">{tvbanners[current].priceStarting}</h4>
              <button className="mt-4 px-6 py-2 text-black bg-white rounded hover:bg-gray-800 transition">Buy Now</button>
              <div className="flex w-[1248px] justify-between mt-[190px] absolute mt[10%]">
                <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev - 1 + tvbanners.length) % tvbanners.length)}><PiLessThanFill/></button>
                <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev + 1) % tvbanners.length)}><PiGreaterThanFill/></button>

              </div>
            </div>
        </div>
    </div>
    <br />

      {/* <h1 className="text-2xl font-bold mb-6 text-center">Earbuds</h1><br /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvs.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br />
      <h1 className="text-2xl font-bold mb-6 text-center">QLED</h1><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {qled.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br />
      <div className="flex">
          <img
            src={secondtvbanners[current].image}
            alt={`Slide ${current}`}
            className="w-full hover:cursor-pointer h-full object-cover transition-all duration-1000 ease-in-out relative"
          />
          <div className="flex w-[1264px] text-gray-700 text-2xl justify-between mt-[190px] absolute">
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setCurrent((prev) => (prev - 1 + secondtvbanners.length) % secondtvbanners.length)}
            >
              <PiLessThanFill />
            </button>
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setCurrent((prev) => (prev + 1) % secondtvbanners.length)}
            >
              <PiGreaterThanFill />
            </button>
          </div>
          <div className={(now!=3)?`w-[30%] text-[#FFFFFF] absolute p-7 ml-[7%] mt-[7%]`:`w-[30%] text-[#191919] absolute p-7 ml-[7%] mt-[7%]`}>
              <h1 className="text-3xl font-bold mb-6">{secondtvbanners[now].title}</h1>
              <h4 className="text-xl">{secondtvbanners[now].specification}</h4>
              <h4 className="text-xl">{secondtvbanners[now].priceStarting}</h4>
              <button className={(now!=3)?`mt-4 px-6 py-2 text-black bg-white rounded hover:bg-gray-800 transition`:`mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition`}>{secondtvbanners[now].tap}</button>
              <div className="flex w-[1248px] justify-between mt-[190px] absolute mt[10%]">
                <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev - 1 + secondtvbanners.length) % secondtvbanners.length)}><PiLessThanFill/></button>
                <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev + 1) % secondtvbanners.length)}><PiGreaterThanFill/></button>

              </div>
            </div>
        </div>
        
        
      <br />
      <h1 className="text-2xl font-bold mb-6 text-center">TV Accessories</h1>
        <div className="w-full flex justify-center">
            <button className="p-2 rounded-xl bg-black text-[#FFFFFF] hover:cursor-pointer">Learn More</button>
        </div><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvaccessories.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br />
      
      <h1 className="text-2xl font-bold mb-6 text-center">Smart Vaccum Cleaner</h1>
        <div className="w-full flex justify-center">
            <button className="p-2 rounded-xl bg-black text-[#FFFFFF] hover:cursor-pointer">Learn More</button>
        </div><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {vaccum.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />
        
        <div className="w-full h-[525px] hover:cursor-pointer">
        <h1 className="text-2xl font-bold mb-6 text-center">Smart Home</h1>
        <div className="w-full flex justify-center">
            <button className="p-2 rounded-xl bg-black text-[#FFFFFF] hover:cursor-pointer">Learn More</button>
        </div><br />
        <div className="flex">
          <img
            src={vaccumbanner[present].image}
            alt={`Slide ${present}`}
            className="w-full hover:cursor-pointer h-full object-cover transition-all duration-1000 ease-in-out relative"
          />
          <div className="flex w-[1264px] text-gray-700 text-2xl justify-between mt-[190px] absolute">
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setPresent((prev) => (prev - 1 + vaccumbanner.length) % vaccumbanner.length)}
            >
              <PiLessThanFill />
            </button>
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setPresent((prev) => (prev + 1) % vaccumbanner.length)}
            >
              <PiGreaterThanFill />
            </button>
          </div>
          <div className="w-[30%] text-[#191919] absolute p-7 ml-[7%] mt-[7%]">
              <h1 className="text-3xl font-bold mb-6">{vaccumbanner[present].title}</h1>
              <h4 className="text-xl">{vaccumbanner[present].specification}</h4>
              <h4 className="text-xl">{vaccumbanner[present].priceStarting}</h4>
              <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Buy Now</button>
              <div className="flex w-[1248px] justify-between mt-[190px] absolute mt[10%]">
                <button className="rounded-[4px]" onClick={() => setPresent((prev) => (prev - 1 + vaccumbanner.length) % vaccumbanner.length)}><PiLessThanFill/></button>
                <button className="rounded-[4px]" onClick={() => setPresent((prev) => (prev + 1) % vaccumbanner.length)}><PiGreaterThanFill/></button>

              </div>
            </div>
        </div>
    </div>
    <br />

        
      
      <h1 className="text-2xl font-bold mb-6 text-center">Air Purifier</h1>
        <div className="w-full flex justify-center">
            <button className="p-2 rounded-xl bg-black text-[#FFFFFF] hover:cursor-pointer">Learn More</button>
        </div><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {airpurifiers.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />

      <h1 className="text-2xl font-bold mb-6 text-center">Security Camera</h1>
        <div className="w-full flex justify-center">
            <button className="p-2 rounded-xl bg-black text-[#FFFFFF] hover:cursor-pointer">Learn More</button>
        </div><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cameras.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />

      <h1 className="text-2xl font-bold mb-6 text-center">Smart Light</h1>
        <div className="w-full flex justify-center">
            <button className="p-2 rounded-xl bg-black text-[#FFFFFF] hover:cursor-pointer">Learn More</button>
        </div><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lights.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />
        



    <div className="bg-white  flex flex-col items-center gap-y-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6  w-full">
       <div className="flex flex-col justify-center items-center text-center w-full  rounded-xl shadow hover:shadow-lg hover:cursor-pointer transition-all p-4 ">
        <button className="mt-2 text-2xl font-medium hover:text-orange-500  ">{services[0].tap}</button>
        <img src={services[0].image} alt={services[0].tap} className="w-full h-48 object-contain  " />    
        </div>
        <div className="flex flex-col justify-center items-center text-center w-full  rounded-xl shadow hover:shadow-lg hover:cursor-pointer transition-all p-4">
        <button className="mt-2 text-2xl font-medium hover:text-orange-500">{services[1].tap}</button>
        <img src={services[1].image} alt={services[1].tap} className="w-full h-48 object-contain px-7" /></div>   
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
      </div>

    </div>
      <br /><br />

    </section>
  );
};

export default TvSmartHome;
