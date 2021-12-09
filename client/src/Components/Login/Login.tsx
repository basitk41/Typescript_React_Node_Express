import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../UI";
import "./Login.scss";
interface Props {}
const Login: FC<Props> = () => {
  return (
    <div className="login">
      <div className="box1">
        <h1>Login</h1>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button onClick={() => console.log("clicked")}>Login</Button>
        <br />
        <h3>OR</h3>
        <Link to="/register" className="link">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Login;
