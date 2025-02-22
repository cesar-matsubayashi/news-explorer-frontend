import { PopupContext } from "../../contexts/PopupContext";
import { UserContext } from "../../contexts/UserContext";
import "../Styles/Form.css";
import "./Login.css";
import { useContext } from "react";
import useFormValidation from "../../utils/useFormValidation";
import Register from "../Register/Register";

export default function Login() {
  const { handleLogin } = useContext(UserContext);
  const { handleOpenPopup, handleClosePopup } = useContext(PopupContext);

  const errorMessages = {
    email: {
      valueMissing: "E-mail é necessário",
      typeMismatch: "E-mail inválido",
    },
    password: {
      valueMissing: "Senha é necessária",
    },
  };

  const { errors, isValid, handleChange, resetForm } =
    useFormValidation(errorMessages);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    let values = "";
    for (const [key, value] of data) {
      values += `${key}: ${value}\n`;
    }
    console.log(values);
    resetForm();
    handleLogin(data);
    handleClosePopup();
  };

  const openRegister = () => {
    handleClosePopup();
    const registerPopup = { title: "Inscrever-se", children: <Register /> };
    handleOpenPopup(registerPopup);
  };

  return (
    <>
      <form className="form form_login" name="login" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset form__fieldset_el_email">
          <label htmlFor="email-input" className="form__label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            className="form__input form__input_popup form__input_el_email"
            placeholder="Insira e-mail"
            required
            onChange={handleChange}
          />
          {errors.email && (
            <span className="email-input-error form__input-error">
              {errors.email}
            </span>
          )}
        </fieldset>

        <fieldset className="form__fieldset form__fieldset_el_password">
          <label htmlFor="password-input" className="form__label">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            className="form__input form__input_popup form__input_el_password"
            placeholder="Insira senha"
            required
            onChange={handleChange}
          />
          {errors.password && (
            <span className="password-input-error form__input-error">
              {errors.password}
            </span>
          )}
        </fieldset>

        <button
          type="submit"
          name="submit"
          className={`form__button form__button_login ${
            !isValid ? "form__button_disabled" : ""
          }`}
          disabled={!isValid}
        >
          Entrar
        </button>
      </form>

      <div className="register">
        ou
        <p className="register__message" onClick={openRegister}>
          Inscreva-se
        </p>
      </div>
    </>
  );
}
