function PropertyModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 shadow text-xl hover:bg-gray-100"
        >
          ✕
        </button>

        {/* Single Property Image */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-96 object-cover"
        />

        {/* Property Details */}
        <div className="p-6">
          <h2 className="text-3xl font-bold">{property.title}</h2>

          <div className="flex items-center gap-4 mt-3 text-gray-600">
            <span>⭐ {property.rating}</span>
            <span>📍 {property.location}</span>
          </div>

          <h3 className="text-2xl font-bold mt-6">
            {property.price}
            <span className="text-gray-500 text-lg"> / night</span>
          </h3>

          <h4 className="text-xl font-semibold mt-6">
            About this place
          </h4>

          <p className="text-gray-600 mt-3 leading-7">
            Enjoy a comfortable stay in this beautiful Airbnb property.
            It offers modern amenities, spacious rooms, free Wi-Fi,
            air conditioning and a peaceful environment. Perfect for
            couples, families and weekend vacations.
          </p>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border rounded-xl p-4">🛏️ 2 Bedrooms</div>
            <div className="border rounded-xl p-4">🚿 2 Bathrooms</div>
            <div className="border rounded-xl p-4">📶 Free Wi-Fi</div>
            <div className="border rounded-xl p-4">🚗 Free Parking</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyModal;