function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">
          Find your next stay
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Discover beautiful homes, villas and unique places to stay.
        </p>

        <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold text-lg transition">
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Hero;