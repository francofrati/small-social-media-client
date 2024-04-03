import { MouseEvent, ReactNode } from "react";
interface Btn1Props {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset" | undefined
  disabled?:boolean
  
}
function Btn1({ children, onClick, type ,disabled}: Btn1Props) {
  return (
    <button
      className={`btn1 ${disabled?'opacity-70 blur-[1px] cursor-default':'btn1-hover cursor-pointer'}`}
      onClick={onClick ? onClick : () => {}}
      type={type??'button'}
      disabled={typeof disabled==='boolean'?disabled:false}
    >
      {children}
    </button>
  );
}

export default Btn1;
