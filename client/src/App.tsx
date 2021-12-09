import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
interface Props {}
const App: FC<Props> = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
