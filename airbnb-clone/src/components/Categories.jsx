import {
  Home,
  Waves,
  Tent,
  Mountain,
  Trees,
  Snowflake,
  Castle,
  Building,
} from "lucide-react";

function Categories({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { icon: <Home size={28} />, name: "All" },
    { icon: <Waves size={28} />, name: "Beach" },
    { icon: <Tent size={28} />, name: "Camping" },
    { icon: <Mountain size={28} />, name: "Mountains" },
    { icon: <Home size={28} />, name: "Cabins" },
    { icon: <Trees size={28} />, name: "Farms" },
    { icon: <Snowflake size={28} />, name: "Pool" },
    { icon: <Castle size={28} />, name: "Castles" },
    { icon: <Building size={28} />, name: "City" },
  ];

  return (
    <section className="px-10 py-8 border-b">
      <div className="flex justify-center gap-10 flex-wrap">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(item.name)}
            className={`flex flex-col items-center cursor-pointer pb-2 transition duration-300 ${
              selectedCategory === item.name
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-600 hover:text-red-500"
            }`}
          >
            {item.icon}
            <p className="mt-2 text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;