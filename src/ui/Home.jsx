import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-20" dir="rtl">
      <h1 className=" font-bold text-3xl  text-slate-900 p-6 sm:p-10  ">
        بهترین فست فودی دلیوری
        <br />
        <span className="text-cyan-400">وقتی گرسنه‌ای، ما نزدیک‌ترینیم!</span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          {username} عزیز، لطفا برای ادامه خرید کلیک کنید
        </Button>
      )}
    </div>
  );
}

export default Home;
