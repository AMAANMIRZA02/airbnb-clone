import PropertyModal from "../components/PropertyModal";
import { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import properties from "../data/properties";
function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter((property) => {
    const matchSearch = property.location
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      property.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar />

      <Hero />
      <SearchBar search={search} setSearch={setSearch} />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="px-10 py-10">
        <h2 className="text-3xl font-bold mb-8">
          Popular Stays
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </section>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      <Footer />
    </>
  );
}

export default Home;