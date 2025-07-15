import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../user/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 160.0,
    totalPrice: 320,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 130,
    totalPrice: 130,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 150,
    totalPrice: 150,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formError = useActionData();

  return (
    <div dir="rtl">
      <h2>برای ورود به صفحه سفارش، اطلاعات تکمیل کنید</h2>

      <Form method="POST">
        <div>
          <label>نام</label>
          <input
            className="input"
            placeholder="نام خود را وارد نمایید"
            type="text"
            name="customer"
            required
          />
        </div>

        <div>
          <label>شماره همراه</label>
          <div>
            <input
              className="input"
              placeholder="شماره همراه خود را وارد نمایید."
              type="tel"
              name="phone"
              required
            />
          </div>
          {formError?.phone && <p>{formError.phone}</p>}
        </div>

        <div>
          <label>آدرس</label>
          <div>
            <input
              placeholder="آدرس مورد نظر وارد کنید "
              className="input"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <input
            className=""
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">
            نیاز دارید سفارش شما در کمترین زمان به دستتان برسد؟
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={false}>
            {isSubmitting ? "منتظر بمانید" : "سفارش"}
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
    priority: data.priority === "on",
  };

  //handling errors
  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "شماره نامعتبر است";
  }
  if (Object.keys(errors).length > 0) return errors;

  //if everything is ok, create new order
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
