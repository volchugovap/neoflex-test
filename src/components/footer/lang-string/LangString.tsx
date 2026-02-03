import { useState, type FC } from "react";
import { TextButton } from "../../../shared/ui";

const lang = ["Рус", "Eng"];

export const LangString: FC = () => {
  const [active, setActive] = useState<number>(0);

  function changeActive(ind: number) {
    setActive(ind);
  }

  return (
    <div className="flex gap-4">
      <img src="/lang.svg" alt="lang" />

      {lang.map((el, ind) => (
        <TextButton
          className={`${active === ind ? "text-darkOrange" : "text-black"} text-15 font-bold`}
          onClick={() => changeActive(ind)}
        >
          {el}
        </TextButton>
      ))}
    </div>
  );
};
