import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu />, loader: loaderMenu },
      { path: "order/new", element: <CreateOrder /> },
      { path: "order/:orderId", element: <Order /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
