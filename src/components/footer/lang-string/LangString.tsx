import { useState, type FC } from "react";
import { TextButton } from "../../../shared/ui";
import { changeLanguage } from "../../../helpers";

interface ILang {
  name: string;
  type: string;
}

const lang: ILang[] = [
  { name: "Рус", type: "ru" },
  { name: "Eng", type: "en" },
];

export const LangString: FC = () => {
  const [active, setActive] = useState<number>(0);

  function changeActive(ind: number) {
    setActive(ind);
  }

  return (
    <div className="flex gap-4">
      <img src="/lang.svg" alt="lang" />

      {lang.map(({ name, type }, ind) => (
        <TextButton
          key={ind}
          className={`${active === ind ? "text-darkOrange" : "text-black"} text-15 font-bold`}
          onClick={() => {
            changeLanguage(type);
            changeActive(ind);
          }}
        >
          {name}
        </TextButton>
      ))}
    </div>
  );
};
