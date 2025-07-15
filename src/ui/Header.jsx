import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between sm:p-6  p-4 border-b-1 border-stone-200 bg-cyan-600  uppercase ">
      <Link to="/">Delivery Fast Food</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
