import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/order/${searchQuery}`);
    setSearchQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search the uniq #"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-2xl py-2 px-4 w-[300px] text-sm bg-stone-200 lg:w-[700px]"
      />
    </form>
  );
}
