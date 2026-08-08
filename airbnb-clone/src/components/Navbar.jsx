import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, User, Menu } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
    
      <div className="max-w-full mx-auto px-8 py-4">

        <div className="flex items-center justify-between">

          {/* LEFT - Logo */}
          <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Airbnb"
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold text-red-500">airbnb</h1>
      </div>

          {/* Search Bar */}
      <div className="hidden md:flex items-center border rounded-full shadow-md px-4 py-2 gap-3 hover:shadow-lg transition">
        <span className="font-medium">Anywhere</span>
        <span className="text-gray-400">|</span>
        <span className="font-medium">Any week</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-500">Add guests</span>

        <button className="bg-red-500 p-2 rounded-full text-white">
          <Search size={18} />
        </button>
      </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 min-w-[200px] justify-end">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hover:bg-gray-100 p-2 rounded-full transition"
            >
              <Heart
                size={25}
                className="text-gray-700"
              />
            </Link>

            {/* Profile Menu */}
            <div className="relative">

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-3 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition bg-white"
              >
                <Menu
                  size={22}
                  className="text-gray-700"
                />

                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                  <User
                    size={21}
                    className="text-gray-600"
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border overflow-hidden">

                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    👤 Profile
                  </Link>

                  <Link
                    to="/wishlist"
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    ❤️ Wishlist
                  </Link>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </nav>
  );
}


export default Navbar;