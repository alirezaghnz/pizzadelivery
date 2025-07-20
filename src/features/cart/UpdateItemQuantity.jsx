import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center ">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="quantity"
      >
        -
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="quantity"
      >
        +
      </Button>
    </div>
  );
}
