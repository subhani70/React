import { useState } from "react";
import { Link } from "react-router-dom";

let NavBar = () => {

  const [showContent, setShowContent] = useState(false)
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-3 text-sm font-medium text-black">
        {/* Left: Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-orange-600 font-bold text-xl">
            <img
              src="https://i.imgur.com/JGqvF2D.png" // Mi logo image
              alt="Mi Logo"
              className="w-6 h-6"
            />
          </Link>

          {/* Categories Left */}
          <ul className="flex space-x-6">
            <li>
              <Link to="/phones" className="hover:text-orange-500 transition">
                Mobile
              </Link>
            </li>
            <li>
              <Link to="/tablets" className="hover:text-orange-500 transition">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-orange-500 transition">
                POCO
              </Link>
            </li>
            <li>
              <Link to="/tv-smarthome" className="hover:text-orange-500 transition">
                Smart Home
              </Link>
            </li>
            <li>
              <Link to="/watch-audio" className="hover:text-orange-500 transition" >
                Watch & Audio
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/discover" className="hover:text-orange-500 transition">
              Discover
            </Link>
          </li>
          <li>
            <Link to="/support" className="hover:text-orange-500 transition">
              Support
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 transition">
              Community
            </a>
          </li>
          <li>
            <button className="text-lg">🔍</button>
          </li>
          <li>
            <button className="text-lg">👤</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
