import React from 'react';

const Footer = () => {
    return (
        <footer className="flex items-center justify-between px-[150px] py-7 bg-white text-[#3f5728] text-[16px] font-light tracking-wide">

            <div className="flex gap-6">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Services</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>

            <div>
                <img
                    src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-green.svg"
                    alt="Nature Logo"
                    className="w-[60px] h-[60px]"
                />
            </div>

            <div>
                Love Nature by Tyler Moore
            </div>
        </footer>
    );
};

export default Footer;
