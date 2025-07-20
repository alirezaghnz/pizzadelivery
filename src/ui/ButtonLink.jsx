import { Link } from "react-router-dom";
export default function ButtonLink({ children, to }) {
  const className =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline bg-stone-300 p-2 rounded-full";
  if (to === "-1")
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
