import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-8 flex flex-col md:flex-row gap-10 items-center">
      <img src={product.image} className="w-72 h-72 object-contain" />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-green-600 text-xl font-semibold">${product.price}</p>
        <p className="my-2">{product.description}</p>
        <p>Rating: ⭐ {product.rating.rate}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
