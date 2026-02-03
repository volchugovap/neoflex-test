import { type FC } from "react";
import { Link } from "react-router";

export const Logo: FC = () => {
  return (
    <Link to="/" className="text-[25px] font-bold">
      QPICK
    </Link>
  );
};
