import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header className="bg-cyan-600">
      <Link to="/">Delivery Fast Food</Link>
      <SearchOrder />
    </header>
  );
}
