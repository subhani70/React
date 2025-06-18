import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoLanguage } from 'react-icons/io5';

const Navbar = () => {
    const mainLinks = ["Courses", "Tutorials", "Practice", "Jobs"];
    const subLinks = [
        "DSA", "Practice Problems", "C", "C++", "Java", "Python", "JavaScript",
        "Data Science", "Machine Learning", "Courses", "Linux", "DevOps", "SQL",
        "Web Development", "System Design", "Aptitude", "GfG Premium"
    ];

    return (
        <nav className="w-full bg-white relative">
            {/* Top Nav */}
            <div className="flex justify-between items-center px-6 py-3">
                {/* Left Links */}
                <ul className="flex gap-6">
                    {mainLinks.map((link, idx) => (
                        <li key={idx} className="text-sm font-semibold text-gray-800 cursor-pointer hover:text-green-600">
                            {link} <span className="text-xs">▼</span>
                        </li>
                    ))}
                </ul>

                {/* Center Logo */}
                <div className="text-green-600 text-3xl  font-bold absolute right-[48vw]"><img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="" /></div>

                {/* Right Side Icons */}
                <div className="flex items-center gap-4">
                    {/* Search Box */}
                    <div className="flex items-center  border-3 rounded-[10px] px-2 border-[#b3d5bb] bg-[#eef3f3]">
                        <FaSearch className="text-gray-500 text-xl mx-2" />
                        <input
                            type="text"z
                            placeholder="Search..."
                            className="bg-transparent outline-none  w-[250px] py-1 px-1 text-sm "
                        />
                        <span className="text-gray-400 text-3xl px-2 cursor-pointer">×</span>
                    </div>

                    <MdOutlineDarkMode className="text-xl cursor-pointer" />
                    <FaBell className="text-xl cursor-pointer" />
                    <IoLanguage className="text-xl cursor-pointer" />
                    <button className="bg-gray-800 text-white px-5 py-2 rounded">Sign In</button>
                </div>
            </div>

            {/* Bottom Sub Nav */}
            <div className="w-full overflow-x-auto whitespace-nowrap px-6 py-2 text-sm border-t border-gray-200">
                <ul className="flex items-center gap-6">
                    {subLinks.map((item, idx) => (
                        <li key={idx} className="text-gray-700 hover:text-green-600 cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
