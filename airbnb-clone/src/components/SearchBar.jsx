import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center py-8 bg-white">
      <div className="flex items-center bg-white shadow-lg rounded-full border w-full max-w-2xl px-4 py-2">

        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none px-3 py-2 text-gray-700"
        />

        <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition">
          <Search size={20} />
        </button>

      </div>
    </div>
  );
}

export default SearchBar;