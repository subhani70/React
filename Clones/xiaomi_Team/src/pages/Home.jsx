import { useState } from "react";

let Home=()=>{

    const productData = [
  {
    name: "Xiaomi Pad 7 Pro",
    desc: "A comprehensive tablet assistant",
    image: "https://i.imgur.com/Pad7Pro.jpg"
  },
  {
    name: "Xiaomi 2K Monitor A27Q",
    desc: "Simple and efficient",
    image: "https://i.imgur.com/Monitor.jpg"
  },
  {
    name: "Xiaomi Router AX3000T",
    desc: "Wi-Fi 6 coverage",
    image: "https://i.imgur.com/Router.jpg"
  }
];

const [activeTab, setActiveTab] = useState(0);

const exploreItems = [
  {
    title: "Xiaomi Electric Scooter S",
    desc: "Transform commuting.",
    image: "https://i.imgur.com/Scooter.jpg"
  },
  {
    title: "Xiaomi AI Glasses",
    desc: "Smarter vision starts here.",
    image: "https://i.imgur.com/Glasses.jpg"
  },
  {
    title: "Redmi Note 14 Series",
    desc: "Craftsmanship in every detail.",
    image: "https://i.imgur.com/Note14.jpg"
  }
];

const tabs = ["Productivity Boosters", "Immersive Entertainment", "Lifestyle Companions", "Smart Living"];

const support = [
  { title: "Customer Support", icon: "📞" },
  { title: "Warranty", icon: "🛡️" },
  { title: "User Guides", icon: "📘" },
  { title: "FAQ", icon: "❓" }
];


  const footerLinks = [
    {
      title: "Support",
      links: [
        "Online Help",
        "Customer Service",
        "Shipping FAQ",
        "Warranty",
        "Xiaomi Exchange",
        "User Guide",
        "Laptop Drivers",
        "Mi Screen Protect",
        "Mi Extended Warranty",
        "Mi Complete Protect",
        "Certification",
        "Service Centre",
        "Xiaomi Easy Finance",
        "Xiaomi Spotify India",
      ],
    },
    {
      title: "Shop and Learn",
      links: [
        "Xiaomi Phones",
        "Redmi Phones",
        "TVs",
        "Laptops and Tablets",
        "Audio",
        "Lifestyle",
        "Smart Home",
      ],
    },
    {
      title: "Retail Store",
      links: ["Mi Home", "Mi Authorized Store", "Mi Store Franchise"],
    },
    {
      title: "About Us",
      links: [
        "Xiaomi",
        "Privacy Policy",
        "User Agreement",
        "Integrity & Compliance",
        "CSR and Disclosures",
        "E-Waste Management",
        "In The Press",
        "Trust Center",
        "Culture",
        "Smartphone Quality",
        "TV Quality",
        "Service Quality",
        "Xiaomi HyperOS",
        "Join Our Team",
      ],
    },
  ];

    return<>
    <div>
        <div className="relative w-full h-[500px] overflow-hidden">
      <img
        src="https://i03.appmifile.com/66_operator_in/01/07/2025/c29dbc665d6b7792359574cbfa613972.jpg?thumb=1&w=5120&f=webp&q=85"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white bg-black bg-opacity-40">
        <h2 className="text-4xl font-bold mb-2">Redmi Note 14 Pro+</h2>
        <p className="text-lg mb-4">Iconic shots, AI crafted</p>
        <button className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600">Learn more</button>
      </div>
    </div>
    </div>

    <div>
          <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="flex justify-center space-x-6 text-sm font-medium">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`pb-2 ${activeTab === i ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white mt-8 p-6 rounded-xl shadow">
        <img src="https://i.imgur.com/Pad7Pro.jpg" alt="Main" className="rounded-lg object-cover w-full h-72" />
        <div className="flex flex-col justify-center">
          <span className="text-sm text-gray-500 mb-1">Xiaomi HyperAI</span>
          <h3 className="text-3xl font-semibold mb-1">xiaomi Pad 7 Pro</h3>
          <p className="text-blue-600 text-sm mb-4">Focus your flow</p>
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-900 w-fit">Learn more</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[{
          title: "Xiaomi Focus Pen",
          desc: "Easy to write and has an added spotlight button",
          img: "https://i.imgur.com/FocusPen.jpg"
        }, {
          title: "Xiaomi Pad 7 / 7 Pro Focus Keyboard",
          desc: "A comprehensive tablet assistant",
          img: "https://i.imgur.com/Keyboard.jpg"
        }, {
          title: "Xiaomi 2K Monitor A27Qi",
          desc: "Slim and simple for effortless work",
          img: "https://i.imgur.com/Monitor.jpg"
        }, {
          title: "Xiaomi Router AX3000T",
          desc: "Full-speed, full-home Wi-Fi 6 coverage",
          img: "https://i.imgur.com/Router.jpg"
        }].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
            <img src={item.img} alt={item.title} className="mx-auto h-24 object-contain mb-3" />
            <h4 className="text-base font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

      {/*  */}
    

    <div>
        <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Explore Xiaomi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {exploreItems.map((item, i) => (
          <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    <div>
         <div className="px-6 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Xiaomi Support</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {support.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-4xl mb-2">{item.icon}</div>
            <h4 className="font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600 px-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </div>


<footer className="bg-black text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h3 className="font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1 text-gray-400">
              {section.links.map((link, j) => (
                <li key={j} className="hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Follow Section */}
        <div>
          <h3 className="font-bold mb-2">Follow Mi</h3>
          <div className="flex gap-3 mb-4">
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>
          </div>
          <h3 className="font-bold mb-2">Let’s stay in touch</h3>
          <div className="flex border border-gray-600 rounded-md overflow-hidden mb-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-black px-3 py-2 text-sm w-full outline-none"
            />
            <button className="bg-gray-800 px-4">→</button>
          </div>
          <div className="border border-gray-600 rounded-md p-3 text-sm">
            <p className="mb-2">📱 Get mi store app</p>
            <p className="text-gray-400">Scan for better shopping</p>
            <button className="mt-2 bg-gray-800 px-4 py-1 rounded">
              📥 Google Play
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        <p>Copyright © 2010 - 2025 Xiaomi. All Rights Reserved</p>
        <p>Sitemap · India / English 🌐</p>
      </div>
    </footer>

    </>
}
export default Home