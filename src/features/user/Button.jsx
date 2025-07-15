import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {
  const className =
    "block-inline bg-cyan-500 text-stone-800 px-4 py-2 rounded-full w-30 tracking-wide font-semibold transition-color duration-300 hover:bg-cyan-300 focus:bg-cyan-300 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
