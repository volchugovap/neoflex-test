import type { Dispatch, FC, SetStateAction } from "react";
import { IoIosClose } from "react-icons/io";
import { TextButton } from "../../shared/ui";
import { getItemById } from "../../data";

interface IProps {
  id: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CardModal: FC<IProps> = ({ setIsOpen, id }) => {
  const { img, title } = getItemById(id);

  const closeModal = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    e.stopPropagation();

    setIsOpen((prev) => !prev);
  };

  return (
    <div
      id="modalOverlay"
      //onClick={closeModal}
      className="fixed top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center bg-black/50"
    >
      <div className="shadow-black10 relative z-20 flex size-48 min-h-1/2 w-full max-w-3xl items-start justify-between rounded-4xl bg-white p-8">
        <img src={img} alt={title} />

        <TextButton onClick={closeModal}>
          <IoIosClose size={50} />
        </TextButton>
      </div>
    </div>
  );
};
