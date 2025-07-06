const Header = () => {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Store</h1>
        <nav className="space-x-4">
          <a href="/watch-audio" className="text-gray-700 hover:text-black">
            Watch & Audio
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
