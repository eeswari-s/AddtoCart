import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();

  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="border shadow-md rounded-lg p-4">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
        <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
        <p className="text-green-700 font-bold">₹ {product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-green-500"
      >
        {inCart ? "Already Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
