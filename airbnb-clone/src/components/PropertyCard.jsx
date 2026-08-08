import { useState } from "react";
import { Heart, Star } from "lucide-react";

function PropertyCard({ property, onClick }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-t-2xl">
      <img
        src={property.image}
         alt={property.title}
        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
      />

        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow">
          Guest Favorite
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setFavorite(!favorite);
          }}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
        >
          <Heart
            size={22}
            className={
              favorite
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">{property.title}</h2>

          <div className="flex items-center gap-1">
            <Star size={16} fill="gold" color="gold" />
            <span>{property.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 mt-2">📍 {property.location}</p>

        <p className="mt-3 text-xl font-bold">
          {property.price}
          <span className="text-base font-normal text-gray-500">
            {" "} / night
          </span>
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;