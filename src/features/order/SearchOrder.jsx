import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [SearchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!SearchQuery) return;
    navigate(`/order/${SearchQuery}`);
    setSearchQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search the uniq #"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
