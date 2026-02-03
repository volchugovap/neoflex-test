import { type FC } from "react";
import { Link } from "react-router";

export const Social: FC = () => {
  return (
    <nav className="flex items-center gap-4.5">
      <Link to="https://vk.com/happen_gaggen">
        <img src="/VK.svg" alt="vk" className="size-7.5" />
      </Link>
      <Link to="https://t.me/volchugovap">
        <img src="/Telegram.svg" alt="telegram" className="size-7.5" />
      </Link>
      <Link to="/">
        <img src="/Whatsapp.svg" alt="whatsapp" className="size-7.5" />
      </Link>
    </nav>
  );
};
