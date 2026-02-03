import { useMemo, type FC } from "react";
import { Link } from "react-router";
import { Social } from "./social/Social";
import { Logo } from "../logo/Logo";
import { LangString } from "./lang-string/LangString";

interface IRow {
  name: string;
  linkTo: string;
}

type ColsType = IRow[][];

const cols: ColsType = [
  [
    { name: "Избранное", linkTo: "/favorites" },
    { name: "Корзина", linkTo: "/cart" },
    { name: "Контакты", linkTo: "/contacts" },
  ],
  [{ name: "Условия сервиса", linkTo: "/" }],
];

export const Footer: FC = () => {
  const minCountRowsInColumns = useMemo(() => {
    let count = cols[0].length;

    for (let i = 0; i <= cols.length - 1; i++) {
      if (cols[i].length <= count) {
        count = cols[i].length;
      }
    }

    return count;
  }, []);

  return (
    <footer className="mt-9 flex items-start justify-between rounded-t-4xl bg-white p-7.5">
      <Logo />

      {cols.map((column) => (
        <ul className="flex h-full flex-col justify-between">
          {column.map(({ name, linkTo }) => (
            <li>
              <Link to={linkTo} className="text-[17px] font-normal">
                {name}
              </Link>
            </li>
          ))}

          {minCountRowsInColumns === column.length && (
            <li>
              <LangString />
            </li>
          )}
        </ul>
      ))}

      <Social />
    </footer>
  );
};
