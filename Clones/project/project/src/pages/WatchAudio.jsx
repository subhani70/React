import ProductCard from "../components/ProductCard";
import watchbanner1 from "../components/assets/watchbanner1.webp"
import watchbanner2 from "../components/assets/watchbanner2.webp"
import watchbanner3 from "../components/assets/watchbanner3.webp"
import buds1 from "../components/assets/buds1.webp"
import buds2 from "../components/assets/buds2.webp"
import buds3 from "../components/assets/buds3.webp"
import buds4 from "../components/assets/buds4.webp"
import wiredearphones1 from "../components/assets/wiredearphones1.webp"
import wiredearphones2 from "../components/assets/wiredearphones2.webp"
import speaker1 from "../components/assets/speaker1.webp"
import speaker2 from "../components/assets/speaker2.webp"
import watch1 from "../components/assets/watch1.webp"
import watch2 from "../components/assets/watch2.webp"
import backpack1 from "../components/assets/backpack1.webp"
import backpack2 from "../components/assets/backpack2.webp"
import shoe1 from "../components/assets/shoe1.webp"
import shoe2 from "../components/assets/shoe2.webp"
import trimmer1 from "../components/assets/trimmer1.webp"
import trimmer2 from "../components/assets/trimmer2.webp"
import trimmer3 from "../components/assets/trimmer3.webp"
import { PiLessThanFill } from "react-icons/pi";
import { PiGreaterThanFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import audio1 from "../components/assets/audio1.webp"
import audio2 from "../components/assets/audio2.webp"

const watchimagebanners = [
  {
    image:watchbanner1,
    title:"Redmi Watch Move",
    specification:"14 Days of Battery Life*",
    priceStarting:"Starting at ₹1,999 (1 Unit)"
  },
  {
    image:watchbanner2,
    title:"Redmi Watch 5 Active",
    specification:"18 Days Battery, Clear+ Calling",
    priceStarting:"Starting at just ₹2,599 (1 Unit)"
  },
  {
    image:watchbanner3,
    title:"Redmi Watch 5 Lite",
    specification:'1.96" AMOLED Display with BT Calling',
    priceStarting:"Get Just At ₹3,499"
  }]

  
const audiobanner = [
  {
    image:audio1,
    title:"Redmi Buds 6",
    specification:"Get upto 2 months* spotify premium",
    priceStarting:"Only at ₹2,799"
  },
  {
    image:audio2,
    title:"Xiaomi Sound Outdoor Speaker",
    specification:"Big Speaker Energy",
    priceStarting:"Only at ₹3,499"
  }]

const earbuds = [
  {
    image: buds1,
    title: "Redmi Buds 6",
    originalprice: 4999,
    discount:40
  },
  {
    image: buds2,
    title: "Redmi Buds 5",
    originalprice: 4999,
    discount:50
  },
  {
    image: buds3,
    title: "Redmi Buds 5C",
    originalprice: 4999,
    discount:64
  },
  {
    image: buds4,
    title: "Redmi Buds 5A",
    originalprice: 2999,
    discount:57
  },
];

const wiredearphones = [
  {
    image: wiredearphones1,
    title: "Redmi Sonic Bass Wireless Earphones 2",
    originalprice: 2999,
    discount:56
  },
  {
    image: wiredearphones2,
    title: "Mi Earphones Basic (with in-builtmic)",
    originalprice: 999,
    discount:50
  },
];

const speakers = [
  {
    image: speaker1,
    title: "Mi Portable Bluetooth Speaker (16W)",
    originalprice: 3499,
    discount:28
  },
  {
    image: speaker2,
    title: "Xiaomi Smart Speaker (IR Control)",
    originalprice: null,
    discount: null
  },
];



const watches = [
  {
    image: watch1,
    title: "Redmi Watch 5 Active",
    originalprice: 2599,
    discount:48
  },
  {
    image: watch2,
    title: "Redmi Watch 5 Lite",
    originalprice: 3499,
    discount: 50
  },
];

const grooming = [
  {
    image: trimmer1,
    title: "Xiaomi Uniblade Trimmer",
    originalprice: 2999,
    discount:50
  },
  {
    image: trimmer2,
    title: "Xiaomi Beard Trimmer 2C",
    originalprice: 1999,
    discount:40
  },
  {
    image: trimmer3,
    title: "Xiaomi Beard Trimmer 2",
    originalprice: 3499,
    discount:42
  },
];

const backpacks = [
  {
    image: backpack1,
    title: "Mi Step Out Backpack",
    originalprice: 499,
    discount:20
  },
  {
    image: backpack2,
    title: "Mi Business Casual Backpack",
    originalprice: 1999,
    discount: 45
  },
];


const shoes = [
  {
    image: shoe1,
    title: "Xiaomi Running Shoes",
  },
  {
    image: shoe2,
    title: "Mi Athleisure Shoes",
  },
];

const WatchAudio = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % watchimagebanners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const [present, setPresent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPresent((prev) => (prev + 1) % audiobanner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-auto mx-auto px-4 py-8">

      <div className="w-full h-[400px]  hover:cursor-pointer">
        <h1 className="text-2xl font-bold mb-6 text-center">Smart Watch</h1>
        <div className="flex">
          <img
            src={watchimagebanners[current].image}
            alt={`Slide ${current}`}
            className="w-full hover:cursor-pointer h-full object-cover transition-all duration-1000 ease-in-out relative"
          />
          <div className="flex w-[1264px] text-gray-700 text-2xl justify-between mt-[190px] absolute">
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setCurrent((prev) => (prev - 1 + watchimagebanners.length) % watchimagebanners.length)}
            >
              <PiLessThanFill />
            </button>
            <button
              className="rounded-[4px] hover:cursor-pointer"
              onClick={() => setCurrent((prev) => (prev + 1) % watchimagebanners.length)}
            >
              <PiGreaterThanFill />
            </button>
          </div>


          {
            (current==0)?
            <div className="w-auto text-[#FFFFFF] absolute p-7 ml-[7%] mt-[10%]">
              <h1 className="text-3xl font-bold mb-6">{watchimagebanners[current].title}</h1>
              <h4 className="text-xl">{watchimagebanners[current].specification}</h4>
              <h4 className="text-xl">{watchimagebanners[current].priceStarting}</h4>
              <button className="mt-4 px-6 py-2 text-black bg-white rounded hover:bg-gray-800 transition">Buy Now</button>
              <div className="flex w-[1248px] justify-between mt-[190px] absolute mt[10%]">
                <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev - 1 + watchimagebanners.length) % watchimagebanners.length)}><PiLessThanFill/></button>
                <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev + 1) % watchimagebanners.length)}><PiGreaterThanFill/></button>

              </div>
            </div>:
            <div className="w-auto absolute p-7 ml-[7%] mt-[10%]">
              <h1 className="text-3xl font-bold mb-6">{watchimagebanners[current].title}</h1>
              <h4 className="text-xl">{watchimagebanners[current].specification}</h4>
              <h4 className="text-xl">{watchimagebanners[current].priceStarting}</h4>
              <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Buy Now</button>
            <div className="flex w-[1248px] justify-between mt-[190px] absolute mt[10%]">
              <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev - 1 + watchimagebanners.length) % watchimagebanners.length)}><PiLessThanFill/></button>
              <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev + 1) % watchimagebanners.length)}><PiGreaterThanFill/></button>

            </div>
            </div>
          }
        </div>
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center"></h1>
      </div>
    </div>
    <br /><br /><br /><br />

      <h1 className="text-2xl font-bold mb-6 text-center">Earbuds</h1><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {earbuds.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

      <br /><br />
      <h1 className="text-2xl font-bold mb-6 text-center">Wired Earphones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {wiredearphones.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />

      <h1 className="text-2xl font-bold mb-6 text-center">Speakers</h1>
      <br /><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {speakers.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />

      <div className="w-full h-[400px]">
        <h1 className="text-2xl font-bold mb-6 text-center">Smart Watch</h1>
        <div className="flex">
          <img
            src={audiobanner[present].image}
            alt={`Slide ${present}`}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out relative"
          />
          <div className="flex w-[1264px] text-gray-700 text-2xl justify-between mt-[190px] absolute mt[10%]">
            <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev - 1 + watchimagebanners.length) % watchimagebanners.length)}><PiLessThanFill/></button>
            <button className="rounded-[4px]" onClick={() => setCurrent((prev) => (prev + 1) % watchimagebanners.length)}><PiGreaterThanFill/></button>

          </div>
            <div className="w-auto absolute p-7 ml-[7%] mt-[10%]">
              <h1 className="text-3xl font-bold mb-6">{audiobanner[present].title}</h1>
              <h4 className="text-xl">{audiobanner[present].specification}</h4>
              <h4 className="text-xl">{audiobanner[present].priceStarting}</h4>
              <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Buy Now</button>
            </div>
        </div>
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center"></h1>
      </div>
    </div>
    <br /><br /><br /><br />

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {watches.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />

      <h1 className="text-2xl font-bold mb-6 text-center">Grooming</h1>
      <br /><br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {grooming.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />

      
      <h1 className="text-2xl font-bold mb-6 text-center">Backpack</h1>
      <br /><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {backpacks.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <br /><br />
      
      <h1 className="text-2xl font-bold mb-6 text-center">Shoes</h1>
      <br /><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
        {shoes.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WatchAudio;
