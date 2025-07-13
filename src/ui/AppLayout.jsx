import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOvervirew from "../features/cart/CartOverview";
export default function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOvervirew />
    </>
  );
}
