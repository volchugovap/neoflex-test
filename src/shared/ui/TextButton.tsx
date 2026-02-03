import { type ButtonHTMLAttributes, type FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: (e?: any) => void;
}

export const TextButton: FC<IProps> = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} style={{ cursor: "pointer" }} {...props}>
      {children}
    </button>
  );
};
