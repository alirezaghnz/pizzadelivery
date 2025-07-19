import { useSelector } from "react-redux";

export default function Username() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="hidden sm:block">
      <p>{username}</p>
    </div>
  );
}
