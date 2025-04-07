// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import CartItem from "../Components/CartItem";

export default function Cart() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="text-right mt-4">
            <p>Total: ₹ {totalPrice.toFixed(2)}</p>
            <p>Discount (10%): ₹ {discount.toFixed(2)}</p>
            <p className="text-xl font-bold">Final Price: ₹ {finalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}
