import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("API error", err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-xl transition">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-4 cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          />
          <h2 className="font-semibold text-sm mb-2 line-clamp-1">{product.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-600 font-bold">${product.price}</span>
          </div>
          {cartItems.some(item => item.id === product.id) ? (
            <button
              className="bg-gray-400 text-white w-full py-1 rounded"
              onClick={() => alert("Already added to cart")}
            >
              Already Added
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-green-500 text-white w-full py-1 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
