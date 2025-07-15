import ButtonLink from "../user/ButtonLink";

function EmptyCart() {
  return (
    <div>
      <ButtonLink to="/menu">&larr; بازگشت به منو</ButtonLink>

      <p>سبد خرید شما خالی است. لطفا یک غذا را انتخاب نمایید :)</p>
    </div>
  );
}

export default EmptyCart;
