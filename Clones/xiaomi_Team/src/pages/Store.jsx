import { ShieldCheck, Truck, Wrench, Globe } from "lucide-react";

let Store = () => {

    const navItems = [
        { name: "Phone" },
        { name: "Smart TV" },
        { name: "Tablet" },
        { name: "Smartwatch" },
        { name: "Buds & Speaker" },
        { name: "Phone Accessories" },
        { name: "Bundles" },
        { name: "Xiaomi Rewards Club" },
    ];

    const offerings = [
        {
            title: "Exclusive Bundles",
            image: "https://i.ibb.co/xFJwS94/bundle.png", // Replace with actual image
        },
        {
            title: "Special Rewards",
            image: "https://i.ibb.co/y5TgqVR/rewards.png",
        },
        {
            title: "Get the Xiaomi Store App",
            image: "https://i.ibb.co/VpvZ3V4/app-icon.png",
        },
    ];

    const products = [
        {
            title: "Xiaomi Smart QLED TV F Pro 55 2025",
            subtitle: "The Quantum Magic 4K QLED Display",
            image: "https://i.ibb.co/9vhWw63/tv1.png",
            price: "₹37,999",
            oldPrice: "₹69,999",
            isBig: true,
        },
        {
            title: "Xiaomi Smart QLED TV G 32 2025",
            subtitle: "QLED Display",
            image: "https://i.ibb.co/JrQm7Fh/tv2.png",
            price: "₹13,999",
            oldPrice: "₹26,999",
        },
        {
            title: "Xiaomi Smart 4K TV F 43 2025",
            subtitle: "Fantastic 4K",
            image: "https://i.ibb.co/7WzYqZf/tv3.png",
            price: "₹24,999",
            oldPrice: "₹42,999",
        },
        {
            title: "Redmi Pad",
            subtitle: "Built For More",
            image: "https://i.ibb.co/YtRwRDg/pad.png",
            price: "₹13,999",
            oldPrice: "₹22,999",
        },
    ];
const tabs = ["Recommend", "Xiaomi Phones", "Redmi Phones", "Phone Accessories"];

const products1 = [
  {
    name: "Xiaomi 15",
    image: "https://i.ibb.co/dGTYYbh/xiaomi15.png",
    price: "₹64,999",
    oldPrice: "₹79,999",
    badges: ["Save ₹15,000", "Exchange Bonus"],
  },
  {
    name: "Redmi Note 14 Pro+ 5G",
    image: "https://i.ibb.co/vLV5d7T/redmi-note-proplus.png",
    price: "From ₹27,999",
    oldPrice: "₹34,999",
    badges: ["Save ₹7,000"],
  },
  {
    name: "Redmi Note 14 Pro 5G",
    image: "https://i.ibb.co/3TcyvCy/redmi-note-pro.png",
    price: "From ₹22,999",
    oldPrice: "₹28,999",
    badges: ["Save ₹6,000"],
  },
  {
    name: "Redmi Note 14 5G",
    image: "https://i.ibb.co/T8dBQkY/redmi-note.png",
    price: "From ₹16,999",
    oldPrice: "₹21,999",
    badges: ["Save ₹5,000"],
  },
  {
    name: "Xiaomi 15 Ultra",
    image: "https://i.ibb.co/nzF7Y8j/xiaomi15-ultra.png",
    price: "₹1,09,999",
    oldPrice: "",
    badges: ["Exchange Bonus"],
  },
  {
    name: "Redmi 14C 5G",
    image: "https://i.ibb.co/nc7hDTK/redmi-14c.png",
    price: "From ₹9,499",
    oldPrice: "₹12,999",
    badges: ["Save ₹3,500"],
  },
  {
    name: "All Products",
    image: "https://i.ibb.co/3B6t7mb/allproducts.png",
    price: "",
    oldPrice: "",
    badges: [],
  },
];

const tabs1 = ["Recommend", "Redmi Pad", "Tablet Accessories"];

const tablets = [
  {
    name: "Xiaomi Pad 7",
    subtitle: "Snapdragon 7+ Gen3",
    image: "https://i.ibb.co/3sCZKsL/xiaomi-pad-7.png",
    price: "From ₹27,999",
    oldPrice: "₹34,999",
    badges: ["Save ₹7000"],
  },
  {
    name: "Redmi Pad Pro 5G",
    subtitle: "",
    image: "https://i.ibb.co/Jq1ZK4P/redmi-pad-pro.png",
    price: "From ₹24,999",
    oldPrice: "₹27,999",
    badges: ["Save ₹3000"],
  },
  {
    name: "Redmi Pad SE",
    subtitle: "11'' FHD+ eye-care display",
    image: "https://i.ibb.co/SRkGb9c/redmi-pad-se.png",
    price: "From ₹11,999",
    oldPrice: "₹14,999",
    badges: ["Save ₹3000"],
  },
  {
    name: "Redmi Pad SE 4G",
    subtitle: "",
    image: "https://i.ibb.co/VqxB7GM/redmi-pad-se-4g.png",
    price: "From ₹9,999",
    oldPrice: "₹15,999",
    badges: ["Save ₹6000"],
  },
  {
    name: "Redmi Pad 2 Wifi + Cellular",
    subtitle: "",
    image: "https://i.ibb.co/jLV1kJL/redmi-pad-2.png",
    price: "From ₹15,999",
    oldPrice: "₹19,999",
    badges: ["New", "Save ₹4000"],
  },
  {
    name: "Xiaomi Focus Pen",
    subtitle: "",
    image: "https://i.ibb.co/Dg7TmfP/focus-pen.png",
    price: "₹5,999",
    oldPrice: "₹8,999",
    badges: ["Save ₹3000"],
  },
  {
    name: "All Products",
    subtitle: "",
    image: "https://i.ibb.co/YZzgk08/tablet-all-products.png",
    price: "",
    oldPrice: "",
    badges: [],
  },
];

const tabs2 = ["Recommend", "TV", "Smart Home"];

const tvItems = [
  {
    name: "Xiaomi Smart Fire TV 32 (80 cm) 2025",
    subtitle: "",
    image: "https://i.ibb.co/Yj8cnqb/fire-tv.png",
    price: "₹12,999",
    oldPrice: "₹24,999",
    badges: ["New", "Save ₹12,000"],
  },
  {
    name: "Xiaomi QLED TV X Pro Series 2025 Edition",
    subtitle: "",
    image: "https://i.ibb.co/mcxtFQs/qled-x-pro.png",
    price: "₹31,999",
    oldPrice: "₹49,999",
    badges: ["Save ₹18,000"],
  },
  {
    name: "Xiaomi Smart TV FX Pro QLED Series 55 (138 cm)",
    subtitle: "",
    image: "https://i.ibb.co/5cYcGSt/fx-pro-55.png",
    price: "₹39,999",
    oldPrice: "₹69,999",
    badges: ["New", "Save ₹30,000"],
  },
  {
    name: "Xiaomi Smart TV FX Pro QLED Series 43 (108 cm)",
    subtitle: "",
    image: "https://i.ibb.co/Yc6mjgB/fx-pro-43.png",
    price: "₹27,999",
    oldPrice: "₹49,999",
    badges: ["New", "Save ₹22,000"],
  },
  {
    name: "Xiaomi Smart QLED TV F Pro 55 2025",
    subtitle: "",
    image: "https://i.ibb.co/TM2JpY4/f-pro-55.png",
    price: "₹37,999",
    oldPrice: "₹69,999",
    badges: ["New", "Save ₹32,000"],
  },
  {
    name: "Xiaomi 4K LED TV LD FX Series 55 (138 cm)",
    subtitle: "",
    image: "https://i.ibb.co/QdX7mxN/fx-series-55.png",
    price: "₹35,999",
    oldPrice: "₹54,999",
    badges: ["Save ₹19,000"],
  },
  {
    name: "All Products",
    subtitle: "",
    image: "https://i.ibb.co/pJqNmDH/all-products-tv.png",
    price: "",
    oldPrice: "",
    badges: [],
  },
];

const tabs3 = ["Recommend", "Smartwatch", "Audio", "Lifestyle"];

const products2 = [
  {
    name: "Redmi Buds 6",
    image: "https://i.ibb.co/NTW8sp5/redmi-buds-6.png",
    price: "₹2,999",
    oldPrice: "₹4,999",
    badges: ["Save ₹2,000"],
  },
  {
    name: "Redmi Watch Move",
    image: "https://i.ibb.co/fMd3hxp/redmi-watch-move.png",
    price: "₹1,999",
    oldPrice: "₹3,999",
    badges: ["Save ₹2,000"],
  },
  {
    name: "Redmi Watch 5 Lite",
    image: "https://i.ibb.co/GvXPGZm/redmi-watch-5-lite.png",
    price: "₹3,499",
    oldPrice: "₹6,999",
    badges: ["Save ₹3,500"],
  },
  {
    name: "Xiaomi Type-C Earphones",
    image: "https://i.ibb.co/gTD5BBP/typec-earphones.png",
    price: "₹599",
    oldPrice: "₹999",
    badges: ["Save ₹400"],
  },
  {
    name: "Redmi Buds 5C",
    image: "https://i.ibb.co/QXQvdLk/redmi-buds-5c.png",
    price: "₹1,799",
    oldPrice: "₹4,999",
    badges: ["Save ₹3,200"],
  },
  {
    name: "Redmi Watch 5 Active & Watch 5 Lite Strap",
    image: "https://i.ibb.co/hY09NB3/watch-strap.png",
    price: "₹499",
    oldPrice: "₹999",
    badges: ["Save ₹500"],
  },
  {
    name: "All Products",
    image: "https://i.ibb.co/5GhB0gy/all-products-watch.png",
    price: "",
    oldPrice: "",
    badges: [],
  },
];

const products3 = [
  {
    name: "Redmi Note 14 Pro 5G",
    image: "https://i.ibb.co/J3q3pxK/redmi-note-14.png",
    price: "₹22,999",
    oldPrice: "₹28,999",
    badges: ["20% off", "Exchange Bonus"],
  },
  {
    name: "Xiaomi Pad 7",
    image: "https://i.ibb.co/3SFG2sF/xiaomi-pad-7.png",
    price: "₹27,999",
    oldPrice: "₹34,999",
    badges: ["20% off"],
  },
  {
    name: "Redmi A4 5G",
    image: "https://i.ibb.co/m6MbGpM/redmi-a4-5g.png",
    price: "₹8,499",
    oldPrice: "₹10,999",
    badges: ["22% off"],
  },
  {
    name: "Redmi Watch Move",
    image: "https://i.ibb.co/fMd3hxp/redmi-watch-move.png",
    price: "₹1,999",
    oldPrice: "₹3,999",
    badges: ["50% off"],
  },
  {
    name: "Redmi Note 14 Pro+ 5G",
    image: "https://i.ibb.co/1RQFgXW/redmi-note-plus.png",
    price: "₹27,999",
    oldPrice: "₹34,999",
    badges: ["20% off"],
  },
  {
    name: "Redmi Pad 2",
    image: "https://i.ibb.co/WBnwnPJ/redmi-pad-2.png",
    price: "₹13,999",
    oldPrice: "₹16,999",
    badges: ["New", "17% off"],
  },
  {
    name: "Redmi 14C 5G",
    image: "https://i.ibb.co/fQ9HKX2/redmi-14c.png",
    price: "₹9,499",
    oldPrice: "₹12,999",
    badges: ["26% off"],
  },
  {
    name: "Redmi Pad 2 Wifi + Cellular",
    image: "https://i.ibb.co/jvTjk9W/pad-2-wifi-cell.png",
    price: "₹15,999",
    oldPrice: "₹19,999",
    badges: ["New", "20% off"],
  },
];

const deals = [
  {
    name: "Redmi Pad 2",
    price: "₹13,999",
    oldPrice: "₹16,999",
    discount: "17% off",
    image: "https://i.ibb.co/WBnwnPJ/redmi-pad-2.png",
    isNew: true,
  },
  {
    name: "Redmi 14C 5G",
    price: "₹9,499",
    oldPrice: "₹12,999",
    discount: "26% off",
    image: "https://i.ibb.co/fQ9HKX2/redmi-14c.png",
  },
  {
    name: "Redmi Pad 2 Wifi + Cellular",
    price: "₹15,999",
    oldPrice: "₹19,999",
    discount: "20% off",
    image: "https://i.ibb.co/jvTjk9W/pad-2-wifi-cell.png",
    isNew: true,
  },
  {
    name: "Redmi Note 14 5G",
    price: "₹16,999",
    oldPrice: "₹21,999",
    discount: "22% off",
    image: "https://i.ibb.co/3SFG2sF/xiaomi-pad-7.png",
  },
  {
    name: "Redmi Watch 5 Lite",
    price: "₹3,499",
    oldPrice: "₹6,999",
    discount: "50% off",
    image: "https://i.ibb.co/fMd3hxp/redmi-watch-move.png",
  },
  {
    name: "Xiaomi Smart Fire TV 32",
    price: "₹12,999",
    oldPrice: "₹24,999",
    discount: "48% off",
    image: "https://i.ibb.co/h9BNDcS/tv-fire-32.png",
    isNew: true,
  },
  {
    name: "Xiaomi Type-C Earphones",
    price: "₹599",
    oldPrice: "₹999",
    discount: "40% off",
    image: "https://i.ibb.co/7rHY5Kp/type-c-earphones.png",
  },
  {
    name: "Xiaomi Smart QLED TV F Pro 55",
    price: "₹37,999",
    oldPrice: "₹69,999",
    discount: "45% off",
    image: "https://i.ibb.co/m6MbGpM/redmi-a4-5g.png",
    isNew: true,
  },
  {
    name: "Redmi Buds 5A",
    price: "₹1,299",
    oldPrice: "₹2,999",
    discount: "56% off",
    image: "https://i.ibb.co/kKCRcXW/redmi-buds-5a.png",
  },
  {
    name: "Redmi 13 5G",
    price: "₹12,499",
    oldPrice: "₹17,999",
    discount: "30% off",
    image: "https://i.ibb.co/1RQFgXW/redmi-note-plus.png",
  },
  {
    name: "Redmi Buds 5C",
    price: "₹1,799",
    oldPrice: "₹4,999",
    discount: "64% off",
    image: "https://i.ibb.co/6H0q2m6/redmi-buds-5c.png",
  },
];

  const items = [
    { icon: <ShieldCheck size={24} />, text: "Official website" },
    { icon: <Truck size={24} />, text: "Delivery in 2–5 days" },
    { icon: <Wrench size={24} />, text: "Xiaomi Official Warranty Service" },
    { icon: <Globe size={24} />, text: "Full Service (Phone/Chat/Email/FAQ)" },
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


    return <>
        <div>
            <div className="relative w-full h-[500px] overflow-hidden">
                <img
                    src="https://i.imgur.com/HeroImage.jpg"
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
        {/* /////////////////////////////////////// */}

        {/* Category Icons */}
        <div className="flex overflow-x-auto px-4 py-4 gap-6 bg-gray-50">
            {navItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-sm min-w-[80px]">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-2" />
                    <span className="text-center">{item.name}</span>
                </div>
            ))}
        </div>

        {/* Offerings Section */}
        <section className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-4">Xiaomi Exclusive Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offerings.map((offer, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                        <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center font-medium">{offer.title}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* ////////////////////// */}

        <div className="px-6 py-8 bg-white">
            <h2 className="text-2xl font-bold mb-4">New Launches &gt;</h2>

            <div className="flex gap-4 overflow-x-auto pb-2">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 rounded-xl border shadow-sm p-4 ${product.isBig ? "w-[350px]" : "w-[250px]"
                            }`}
                    >
                        <div className="text-orange-500 text-sm font-medium mb-1">New</div>
                        <div className="font-semibold text-lg leading-tight">{product.title}</div>
                        <div className="text-gray-500 text-sm mb-2">{product.subtitle}</div>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-40 object-contain my-2"
                        />

                        <div className="flex gap-2 items-center font-semibold">
                            <span className="text-lg">{product.price}</span>
                            <span className="text-sm text-gray-400 line-through">
                                {product.oldPrice}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* ////////////////////////////////// */}

        <div className="bg-gray-100 px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">Phones</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 text-sm">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={`cursor-pointer pb-2 ${
              idx === 0
                ? "border-b-2 border-orange-500 text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products1.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-md">
            <div className="mb-2 space-x-2">
              {item.badges.map((badge, i) => (
                <span
                  key={i}
                  className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-0.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="font-semibold text-md mb-1">{item.name}</div>
            {item.price && (
              <div className="text-lg font-bold text-black mb-2">{item.price}</div>
            )}
            {item.oldPrice && (
              <div className="text-sm text-gray-400 line-through">{item.oldPrice}</div>
            )}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mt-2"
            />
          </div>
        ))}
      </div>
    </div>
    {/* //////////////////// */}

    <div className="bg-gray-100 px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">Tablets</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 text-sm">
        {tabs1.map((tab, idx) => (
          <div
            key={idx}
            className={`cursor-pointer pb-2 ${
              idx === 0
                ? "border-b-2 border-orange-500 text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tablets.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="mb-2 space-x-2 flex flex-wrap">
              {item.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`${
                    badge === "New"
                      ? "bg-orange-100 text-orange-500"
                      : "bg-yellow-100 text-yellow-600"
                  } text-xs font-medium px-2 py-0.5 rounded`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="font-semibold text-md">{item.name}</div>
            {item.subtitle && (
              <div className="text-gray-500 text-sm mb-1">{item.subtitle}</div>
            )}
            {item.price && (
              <div className="text-lg font-bold text-black">{item.price}</div>
            )}
            {item.oldPrice && (
              <div className="text-sm text-gray-400 line-through mb-2">
                {item.oldPrice}
              </div>
            )}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mt-2"
            />
          </div>
        ))}
      </div>
    </div>

    {/* ///////////////////// */}

    <div className="bg-gray-100 px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">TV & Smart Home</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 text-sm">
        {tabs2.map((tab, idx) => (
          <div
            key={idx}
            className={`cursor-pointer pb-2 ${
              idx === 0
                ? "border-b-2 border-orange-500 text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="mb-2 space-x-2 flex flex-wrap">
              {item.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`${
                    badge === "New"
                      ? "bg-orange-100 text-orange-500"
                      : "bg-yellow-100 text-yellow-600"
                  } text-xs font-medium px-2 py-0.5 rounded`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="font-semibold text-md">{item.name}</div>
            {item.price && (
              <div className="text-lg font-bold text-black">{item.price}</div>
            )}
            {item.oldPrice && (
              <div className="text-sm text-gray-400 line-through mb-2">
                {item.oldPrice}
              </div>
            )}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mt-2"
            />
          </div>
        ))}
      </div>
    </div>
    {/* ////////////////////////////////// */}

    <div className="bg-gray-100 px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">Smart Watch & Audio</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 text-sm">
        {tabs3.map((tab, idx) => (
          <div
            key={idx}
            className={`cursor-pointer pb-2 ${
              idx === 0
                ? "border-b-2 border-orange-500 text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products2.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="mb-2 space-x-2 flex flex-wrap">
              {item.badges.map((badge, i) => (
                <span
                  key={i}
                  className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-0.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="font-semibold text-md">{item.name}</div>
            {item.price && (
              <div className="text-lg font-bold text-black">{item.price}</div>
            )}
            {item.oldPrice && (
              <div className="text-sm text-gray-400 line-through mb-2">
                {item.oldPrice}
              </div>
            )}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mt-2"
            />
          </div>
        ))}
      </div>
    </div>

    {/* //////////////////////////////////// */}

     <div className="bg-gray-50 px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">More recommendations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products3.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="space-x-2 mb-2 flex flex-wrap">
              {item.badges.map((badge, i) => (
                <span
                  key={i}
                  className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-0.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="font-semibold text-md">{item.name}</div>
            <div className="text-sm text-gray-500 mt-1">From</div>
            <div className="text-lg font-bold">{item.price}</div>
            <div className="text-sm text-gray-400 line-through">
              {item.oldPrice}
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mt-3"
            />
          </div>
        ))}
      </div>
    </div>

    {/* /////////////////////// */}

    <div className="bg-gray-50 px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">🔥 Smart Deals</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {deals.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-wrap gap-1 mb-2">
              {item.isNew && (
                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded">
                  New
                </span>
              )}
              <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded">
                {item.discount}
              </span>
            </div>
            <div className="font-medium">{item.name}</div>
            <div className="text-sm text-gray-500">From</div>
            <div className="text-lg font-bold">{item.price}</div>
            <div className="text-sm text-gray-400 line-through">
              {item.oldPrice}
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mt-2"
            />
          </div>
        ))}
      </div>
    </div>
    {/* //////////////////////////// */}
    <div className="bg-white py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Why Shop on mi.com
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 text-gray-700"
          >
            <div className="text-orange-500">{item.icon}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>

    {/* //////////////////// */}

    <div className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-xl font-bold mb-2">To subscribe to our newsletters</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to get the latest news and exclusive offers
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
          Subscribe
        </button>
      </div>
      <div className="mt-4">
        <input type="checkbox" className="mr-2" />
        <label className="text-sm text-gray-600">
          I have read and agree to Xiaomi's{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>
        </label>
      </div>
    </div>

    {/* /////////////////////// */}

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
export default Store