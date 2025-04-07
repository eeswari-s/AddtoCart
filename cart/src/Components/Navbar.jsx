import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartPopup from "./CartPopup.jsx";

const Navbar = () => {
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      <Link to="/" className="text-xl italic font-bold">FakeStore</Link>
      <div>
        <Link to="/" className="mr-4">Products</Link>
        <button className="relative" onClick={() => setShowCart(!showCart)}>
          Cart
          <span className="absolute -top-2 -right-3 bg-red-500 rounded-full px-2 text-xs">
            {cartItems.length}
          </span>
        </button>
      </div>
      <CartPopup isOpen={showCart} onClose={() => setShowCart(false)} />
    </nav>
  );
};

export default Navbar;
