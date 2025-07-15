import { useState } from "react";
import Button from "./Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
        className="input mb-5 mt-5"
      />

      {username !== "" && (
        <div>
          <Button>سفارش دهید</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
