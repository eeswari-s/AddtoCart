// src/components/CartItem.jsx
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();
  const total = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center justify-between border p-4 rounded-xl mb-4 shadow">
      <div className="flex-1">
        <h3 className="font-bold">{item.title}</h3>
        <p>₹ {item.price} × {item.quantity} = ₹ {total}</p>
        <div className="mt-2 flex items-center gap-2">
          <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-300">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-300">+</button>
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
        Remove
      </button>
    </div>
  );
}
