import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaMoon, FaPlus, FaShoppingCart, FaSun, FaTimes } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=6").then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, type) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1) } : item
    ));
  };

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.some((fav) => fav.id === product.id)
        ? prevFavorites.filter((fav) => fav.id !== product.id)
        : [...prevFavorites, product];
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}> 
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">E-Shop</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 text-black rounded-lg focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="relative cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{cart.length}</span>
            )}
          </div>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun className="text-yellow-400 text-2xl" /> : <FaMoon className="text-white text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 z-50 overflow-y-auto">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <FaTimes className="cursor-pointer text-xl" onClick={() => setCartOpen(false)} />
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-600 mt-4">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-2">
                  <img src={item.image} alt={item.title} className="w-14 h-14 object-cover rounded-md" />
                  <p className="text-sm w-40 truncate">{item.title}</p>
                  <div className="flex items-center">
                    <FaMinus className="text-red-500 cursor-pointer" onClick={() => updateQuantity(item.id, "dec")} />
                    <span className="mx-2">{item.quantity}</span>
                    <FaPlus className="text-green-500 cursor-pointer" onClick={() => updateQuantity(item.id, "inc")} />
                  </div>
                  <span className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 cursor-pointer text-lg">&times;</button>
                </div>
              ))}
              <div className="mt-4 text-lg font-bold">Total: ${totalPrice}</div>
            </>
          )}
        </div>
      )}

      {/* Product Listings */}
      <div className="px-10 py-12 grid md:grid-cols-3 gap-8">
        {products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())).map((product) => (
          <motion.div key={product.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition relative flex flex-col items-center"
            whileHover={{ scale: 1.05 }}>
            <img src={product.image} alt={product.title} className="w-40 h-40 object-contain mb-4 rounded-lg" />
            <h3 className="text-lg font-bold text-center">{product.title}</h3>
            <p className="text-gray-600 text-center my-2">${product.price}</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={() => addToCart(product)}>Add to Cart</button>
              <FaHeart className={`cursor-pointer text-2xl ${favorites.some((fav) => fav.id === product.id) ? "text-red-500" : "text-gray-400"}`} onClick={() => toggleFavorite(product)} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
