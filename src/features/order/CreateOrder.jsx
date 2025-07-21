import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const dispatch = useDispatch();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  //console.log(cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isAddressLoading = addressStatus === "loading";

  const formError = useActionData();

  if (!cart.length) return <EmptyCart />;
  return (
    <div dir="rtl" className="px-4 py-8 ">
      <h2 className="mb-8 text-xl font-semibold">
        برای ورود به صفحه سفارش، اطلاعات تکمیل کنید
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex sm:flex-row">
          <label className="sm:basis-37 "> نام و نام خانوادگی </label>
          <input
            className="input w-full"
            placeholder="نام خود را وارد نمایید"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex sm:flex-row">
          <label className="sm:basis-37">شماره همراه</label>
          <div className="grow">
            <input
              className="input w-full"
              placeholder="شماره همراه خود را وارد نمایید"
              type="tel"
              name="phone"
              required
            />
            {formError?.phone && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex sm:flex-row">
          <label className="sm:basis-37">آدرس</label>
          <div className="grow">
            <input
              placeholder="آدرس مورد نظر وارد کنید "
              className="input w-full"
              type="text"
              name="address"
              disabled={isAddressLoading}
              defaultValue={address}
              required
            />
            {errorAddress && (
              <p className="text-xs mt-1 text-red-700 bg-red-100 p-2 rounded-md ">
                {errorAddress}
              </p>
            )}
          </div>

          <span className="absolute left-2 top-[1px] z-50 sm:left-[1px]">
            {!position.latitude && !position.longitude && (
              <Button
                disabled={isAddressLoading}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                type="small"
              >
                موقعیت مکانی
              </Button>
            )}
          </span>
        </div>

        <div className="mb-10">
          <input
            className="h-4 w-4 accent-cyan-700 focus:outline-none focus:ring focus:ring-cyan-700"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-sm px-2">
            نیاز دارید سفارش شما در کمترین زمان به دستتان برسد؟
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={false}>
            {isSubmitting
              ? "منتظر بمانید"
              : `سفارش شما به قیمت ${totalPrice}تومان`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  //console.log(data);

  //create order object for create new order
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  //handling errors
  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "شماره نامعتبر است";
  }
  if (Object.keys(errors).length > 0) return errors;

  //if everything is ok, create new order
  const newOrder = await createOrder(order);
  store.dispatch(clearItem());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
