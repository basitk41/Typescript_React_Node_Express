import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../UI";
import axios, { AxiosResponse } from "axios";
import { URL } from "../../Utils/Url";
import "./Register.scss";
interface Props {}
const Register: FC<Props> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitHandler = () => {
    axios
      .post(`${URL}/users`, { name, email, password })
      .then((res: AxiosResponse) => console.log(res.data))
      .catch((err: AxiosResponse) => console.log(err));
  };
  return (
    <div className="register">
      <div className="box1">
        <h1>Register</h1>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button onClick={submitHandler}>Register</Button>
        <br />
        <h3>OR</h3>
        <Link to="/login" className="link">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Register;
