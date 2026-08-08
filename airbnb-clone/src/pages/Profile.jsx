import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Wishlist() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">
          ❤️ My Wishlist
        </h1>

        <p className="text-gray-600">
          Your favourite properties will appear here.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;