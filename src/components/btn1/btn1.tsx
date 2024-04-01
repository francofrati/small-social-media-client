import { MouseEvent, ReactNode } from "react";
interface Btn1Props {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}
function Btn1({ children, onClick }: Btn1Props) {
  return (
    <button
      className="btn1"
      onClick={onClick ? onClick : () => {}}
      type="button"
    >
      {children}
    </button>
  );
}

export default Btn1;
