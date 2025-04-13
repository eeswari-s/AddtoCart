import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <Link to="/" className="text-xl font-bold italic">
        Fake Store
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-green-300">Products</Link>
        <Link to="/cart" className="relative hover:text-green-300">
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="bg-red-500 text-xs text-white rounded-full px-2 py-0.5 absolute -top-2 -right-3 animate-bounce">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
