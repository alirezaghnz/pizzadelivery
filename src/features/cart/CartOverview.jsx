import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="bg-slate-800 text-stone-200 p-4 sm:p-6 flex items-center justify-between">
      <p className="space-x-4 sm:space-x-6 font-semibold">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">سبد خرید</Link>
    </div>
  );
}

export default CartOverview;
