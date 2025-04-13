import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow">
              <img src={item.image} className="w-16 h-16 object-contain" />
              <p className="w-1/3">{item.title}</p>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-semibold text-right mt-4">
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  );
}
