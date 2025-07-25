import ButtonLink from "../../ui/ButtonLink";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3" dir="rtl">
      <ButtonLink to="/menu"> بازگشت به منو</ButtonLink>
      <h2 dir="rtl" className="mt-7 text-xl font-semibold">
        سبد خرید کاربر {username}
      </h2>

      <ul className="mt-3 divide-y divide-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          سفارش پیتزا
        </Button>

        <Button onClick={() => dispatch(clearItem())} type="delete_lg">
          حذف
        </Button>
      </div>
    </div>
  );
}

export default Cart;
