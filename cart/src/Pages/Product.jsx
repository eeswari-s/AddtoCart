import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, cartItems } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="flex flex-col md:flex-row gap-10 p-10">
      <div className="flex-1">
        <img src={product.image} alt={product.title} className="w-full max-w-sm mx-auto" />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-green-700 font-bold text-xl">₹ {product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
        
        {inCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

