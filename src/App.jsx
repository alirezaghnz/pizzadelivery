import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import Order, { loader as loaderOrder } from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";

import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "menu",
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <NotFound />,
      },
      { path: "order/new", element: <CreateOrder /> },
      {
        path: "order/:orderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <NotFound />,
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
