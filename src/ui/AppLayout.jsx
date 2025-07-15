import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOvervirew from "../features/cart/CartOverview";
import Loader from "./Loader";
export default function AppLayout() {
  const navigation = useNavigation();
  // state =  loading || idle || submitting
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen overflow-scroll">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className=" max-w-3xl  mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOvervirew />
    </div>
  );
}
