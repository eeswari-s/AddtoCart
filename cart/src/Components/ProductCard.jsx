import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ item }) {
  const { addToCart, cartItems } = useContext(CartContext);
  const alreadyAdded = cartItems.some(p => p.id === item.id);

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-xl transition-all flex flex-col justify-between">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
        <h2 className="mt-2 font-semibold">{item.title}</h2>
        <p className="text-lg font-bold text-green-600">${item.price}</p>
      </Link>
      <button
        onClick={() => !alreadyAdded && addToCart(item)}
        className={`mt-4 p-2 rounded-md font-medium transition ${
          alreadyAdded ? "bg-green-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {alreadyAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
