import "./RegisterSuccessful.css";
import Login from "../Login/Login";
import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";

export default function RegisterSuccessful() {
  const { handleOpenPopup } = useContext(PopupContext);

  const openLogin = () => {
    const loginPopup = { title: "Entrar", children: <Login /> };
    handleOpenPopup(loginPopup);
  };

  return (
    <p className="login-link" onClick={openLogin}>
      Entre
    </p>
  );
}
