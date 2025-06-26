import hulk from './img/hulk.webp'

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5eee7]">
      <div className="flex bg-white rounded-xl shadow-lg  w-[600px]">
        <div className="md:w-1/2 w-full ">
          <img
            src={hulk}
            alt="Gabrielle Essence Eau De Parfum"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <span className="uppercase tracking-widest font-bold text-xs text-gray-500">Perfume</span>
            <h1 className="mt-2 text-3xl font-bold font-serif text-gray-900 leading-tight">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="mt-4 text-gray-500 text-sm">
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <span className="text-3xl font-bold text-green-700 mr-4">$149.99</span>
            <span className="text-sm text-gray-400 line-through">$169.99</span>
          </div>
          <button className="mt-6 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App