import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-8 py-3 text-[15px] font-medium text-black">
        {/* Left: Logo */}
        <div className="flex items-center space-x-12">
          <Link to="/">
            <img
              src="https://i.imgur.com/JGqvF2D.png"
              alt="Mi Logo"
              className="w-6 h-6"
            />
          </Link>

          {/* Center Menu */}
          <ul className="flex space-x-8">
            <li><Link to="/store" className="hover:text-orange-500">Store</Link></li>
            <li><Link to="/phones" className="hover:text-orange-500">Phones</Link></li>
            <li><Link to="/tablets" className="hover:text-orange-500">Tablets</Link></li>
            <li><Link to="/tv-smart-home" className="hover:text-orange-500">TV & Smart Home</Link></li>
            <li><Link to="/audio" className="hover:text-orange-500">Smart Watch & Audio</Link></li>
          </ul>
        </div>

        {/* Right Menu */}
        <ul className="flex space-x-6 items-center">
          <li><Link to="/discover" className="hover:text-orange-500">Discover</Link></li>
          <li><Link to="/support" className="hover:text-orange-500">Support</Link></li>
          <li><button className="text-xl">🔍</button></li>
          <li><button className="text-xl">🛒</button></li>
          <li><button className="text-xl">👤</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
