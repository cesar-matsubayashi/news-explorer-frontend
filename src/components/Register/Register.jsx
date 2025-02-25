import { PopupContext } from "../../contexts/PopupContext";
import { UserContext } from "../../contexts/UserContext";
import useFormValidation from "../../utils/useFormValidation";
import Login from "../Login/Login";
import "../Styles/Form.css";
import "./Register.css";
import { useContext } from "react";

export default function Register() {
  const { handleRegister } = useContext(UserContext);
  const { handleOpenPopup, handleClosePopup } = useContext(PopupContext);

  const errorMessages = {
    email: {
      valueMissing: "E-mail é necessário",
      typeMismatch: "E-mail inválido",
    },
    password: {
      valueMissing: "Senha é necessária",
      tooShort: "Senha deve ter no mínimo 8 caracteres",
    },
    name: {
      valueMissing: "Nome é necessário",
      tooShort: "Nome deve ter no mínimo 2 caracteres",
      tooLong: "Nome deve ter no máximo 30 caracteres",
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

    resetForm();
    handleClosePopup();
    handleRegister(data);
  };

  const openLogin = () => {
    handleClosePopup();
    const loginPopup = { title: "Entrar", children: <Login /> };
    handleOpenPopup(loginPopup);
  };

  return (
    <>
      <form
        className="form form_register"
        name="register"
        onSubmit={handleSubmit}
      >
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
            minLength={8}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="password-input-error form__input-error">
              {errors.password}
            </span>
          )}
        </fieldset>

        <fieldset className="form__fieldset form__fieldset_el_name">
          <label htmlFor="name-input" className="form__label">
            Nome de usuário
          </label>
          <input
            type="name"
            name="name"
            id="name-input"
            className="form__input form__input_popup form__input_el_name"
            placeholder="Insira seu nome de usuário"
            required
            minLength={2}
            maxLength={30}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="name-input-error form__input-error">
              {errors.name}
            </span>
          )}
        </fieldset>

        <span className="register-input-error form__input-error">
          Este e-mail não está disponível
        </span>

        <button
          type="submit"
          name="submit"
          className={`form__button form__button_register ${
            !isValid ? "form__button_disabled" : ""
          }`}
          disabled={!isValid}
        >
          Inscrever-se
        </button>
      </form>

      <div className="login">
        ou
        <p className="login__message" onClick={openLogin}>
          Entre
        </p>
      </div>
    </>
  );
}
