/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold  ">{formatCurrency(totalPrice)}</p>
        <Button type="delete_sm">حذف</Button>
      </div>
    </li>
  );
}

export default CartItem;
