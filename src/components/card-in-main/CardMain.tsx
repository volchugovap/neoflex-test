import { useState, type FC } from "react";
import { Description } from "./description/Description";
import { TopCard } from "./top-of-card/TopCard";
import { CardModal } from "../card-in-modal/CardModal";
import { createPortal } from "react-dom";

interface IProps {
  id: number;
}

export const CardMain: FC<IProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="shadow-black10 flex h-102 w-87.5 flex-col justify-between rounded-4xl bg-white px-6.5 py-8">
        <TopCard id={id} setIsOpen={setIsOpen} />

        <Description id={id} />
      </div>

      {isOpen &&
        createPortal(
          <CardModal id={id} setIsOpen={setIsOpen} />,
          document.body,
        )}
    </>
  );
};
