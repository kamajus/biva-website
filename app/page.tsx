import { FaHome, FaBell, FaCog, FaPlus, FaStar } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="p-4 bg-gray-50">
        <div className="relative">
          <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Para onde você indo?"
            className="w-full pl-12 pr-4 py-3 bg-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button className="px-6 py-2 bg-red-50 text-red-600 rounded-full whitespace-nowrap font-medium">
            Todos
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
            Apartamento
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
            Vivenda
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
            Terreno
          </button>
        </div>
      </div>

      {/* Property Listings */}
      <div className="p-4 grid gap-4">
        {/* Property Card 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
              alt="Property in Benguela"
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full">
              <FaStar className="text-gray-400" />
            </button>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Benguela, Province, Angola</h3>
            <p className="text-2xl font-bold mt-2">20.000,00 AKZ <span className="text-gray-500 text-sm">/mês</span></p>
          </div>
        </div>

        {/* Property Card 2 */}
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
              alt="Property in Luanda"
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full">
              <FaStar className="text-gray-400" />
            </button>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Luanda Province, Angola</h3>
            <p className="text-2xl font-bold mt-2">35.000,00 AKZ <span className="text-gray-500 text-sm">/mês</span></p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-6">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center text-primary">
            <FaHome className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <FaStar className="text-2xl" />
            <span className="text-xs mt-1">Favoritos</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="bg-primary p-4 rounded-full -mt-8">
              <FaPlus className="text-xl text-white" />
            </div>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <FaBell className="text-2xl" />
            <span className="text-xs mt-1">Alertas</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <FaCog className="text-2xl" />
            <span className="text-xs mt-1">Config</span>
          </button>
        </div>
      </div>
    </main>
  )
}