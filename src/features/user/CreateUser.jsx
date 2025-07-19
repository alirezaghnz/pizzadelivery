import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 خوش آمدید، برای ورود لطفا نام خود را وارد نمایید</p>

      <input
        dir="rtl"
        type="text"
        placeholder="نام کامل خودتا را وارد نمایید"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-5 mt-5 w-full"
      />

      {username !== "" && (
        <div>
          <Button type="primary">سفارش دهید</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
