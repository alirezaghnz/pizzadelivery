import ButtonLink from "../../ui/ButtonLink";

function EmptyCart() {
  return (
    <div dir="rtl" className="py-7 ">
      <ButtonLink to="/menu">بازگشت به منو</ButtonLink>

      <p className="mt-5 font-semibold">
        سبد خرید شما خالی است. لطفا یک غذا را انتخاب نمایید :)
      </p>
    </div>
  );
}

export default EmptyCart;
