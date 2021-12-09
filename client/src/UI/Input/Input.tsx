import { FC } from "react";
import "./Input.scss";
interface Props {
  type: string;
  placeholder?: string;
  onChange?: () => void;
  inline?: boolean;
}
const Input: FC<Props> = ({ type, placeholder, onChange, inline }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={onChange} />
      {!inline && <br />}
    </>
  );
};
export default Input;
