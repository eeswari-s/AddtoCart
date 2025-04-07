import { useCart } from "../context/CartContext";

const CartPopup = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  if (!isOpen) return null;

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed top-20 right-6 w-96 max-h-[400px] overflow-y-auto bg-white border border-gray-300 shadow-xl rounded-lg p-4 z-50">
      <button className="text-red-500 font-bold float-right" onClick={onClose}>X</button>
      <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-800 w-[70%]">{item.title}</h3>
                <p className="text-green-600 font-bold text-sm">₹ {item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-1 text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* 🧮 Total section */}
          <div className="mt-4 text-right">
            <h3 className="font-bold text-lg text-black">
              Total: ₹ {total.toFixed(2)}
            </h3>
          </div>
        </>
      )}

      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Close
      </button>
    </div>
  );
};

export default CartPopup;
