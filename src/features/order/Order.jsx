import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div dir="rtl" className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibold text-xl">جزئیات سفارش با کد {id}</h2>

        <div>
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase text-red-50 tracking-wide">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase text-green-50 tracking-wide">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5 rounded-2xl">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `فقط ${calcMinutesLeft(estimatedDelivery)}  دقیقه مانده است 😃`
            : "سفارش باید به دستتان رسیده باشد"}
        </p>
        <p className="text-sm bg-sky-400 px-1 py-2 rounded-full">
          (زمان تقریبی: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="bg-stone-200 space-y-1 px-6 py-5 rounded-2xl">
        <p className="font-semibold text-sm text-sky-600">
          قیمت پیتزا : {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="font-semibold text-sm text-sky-600">
            هزینه بابت اولویت سفارش: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          مبلغ قابل پرداخت: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
  const order = getOrder(params.orderId);
  return order;
}

export default Order;
