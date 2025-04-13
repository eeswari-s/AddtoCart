import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </div>
  );
}
