import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOvervirew from "../features/cart/CartOverview";
import Loader from "./Loader";
export default function AppLayout() {
  const navigation = useNavigation();
  // state =  loading || idle || submitting
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOvervirew />
    </div>
  );
}
