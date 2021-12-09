import { FC } from "react";
import "./Button.scss";
interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children?: string | JSX.Element;
}
const Button: FC<Props> = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
