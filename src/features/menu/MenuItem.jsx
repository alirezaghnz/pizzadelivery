import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddCart() {
    const newitem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newitem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-50 ${soldOut ? "opacity-70 gr" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500">اتمام موجودی</p>
          )}
          {!soldOut && (
            <Button onClick={handleAddCart} type="small">
              اضافه به سبد
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
