import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm inline-block bg-cyan-500 text-stone-800 rounded-full tracking-wide font-semibold transition-color duration-300 hover:bg-cyan-300 focus:bg-cyan-300 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-4 md:py-2",
    small: base + " px-2 py-[5px] md:px-4 md:py-[7px] text-sm",
    quantity: base + " px-1.5 py-1.5 md:px-2.5 md:py-2.5 rounded-md text-md",
    delete_sm:
      "inline-block text-xs bg-red-400 text-stone-800 rounded-full tracking-wide font-semibold transition-color duration-300 hover:bg-cyan-300 focus:bg-cyan-300 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-4 md:py-2",
    delete_lg:
      "inline-block text-sm bg-red-400 text-stone-800 rounded-full tracking-wide font-semibold transition-color duration-300 hover:bg-cyan-300 focus:bg-cyan-300 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-4 md:py-2",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
