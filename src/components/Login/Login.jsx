import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import { PopupContext } from "../../contexts/PopupContext";
import { UserContext } from "../../contexts/UserContext";
import "../Styles/Form.css";
import "./Login.css";
import { useContext } from "react";
import useFormValidation from "../../utils/useFormValidation";
import Register from "../Register/Register";

export default function Login({ errorMessage }) {
  const { t } = useTranslation();
  const { handleLogin } = useContext(UserContext);
  const { handleOpenPopup, handleClosePopup } = useContext(PopupContext);

  const errorMessages = {
    email: {
      valueMissing: t("login.error.email.valueMissing"),
      typeMismatch: t("login.error.email.typeMismatch"),
    },
    password: {
      valueMissing: t("login.error.password.valueMissing"),
    },
  };

  const { errors, isValid, handleChange } = useFormValidation(errorMessages);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const obj = Object.fromEntries(data.entries());

    handleLogin(obj);
  };

  const openRegister = () => {
    handleClosePopup();
    const registerPopup = {
      title: t("login.registerTitle"),
      children: <Register />,
    };
    handleOpenPopup(registerPopup);
  };

  return (
    <>
      <form className="form form_login" name="login" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset form__fieldset_el_email">
          <label htmlFor="email-input" className="form__label">
            {t("login.email.label")}
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            className="form__input form__input_popup form__input_el_email"
            placeholder={t("login.email.placeholder")}
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
            {t("login.password.label")}
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            className="form__input form__input_popup form__input_el_password"
            placeholder={t("login.password.placeholder")}
            required
            onChange={handleChange}
          />
          {errors.password && (
            <span className="password-input-error form__input-error">
              {errors.password}
            </span>
          )}
        </fieldset>

        {errorMessage && (
          <span className="login-input-error form__input-error">
            {errorMessage.message}
          </span>
        )}

        <button
          type="submit"
          name="submit"
          className={`form__button form__button_login ${
            !isValid ? "form__button_disabled" : ""
          }`}
          disabled={!isValid}
        >
          {t("login.submit")}
        </button>
      </form>

      <div className="register">
        {t("login.or")}
        <p className="register__message" onClick={openRegister}>
          {t("login.registerTitle")}
        </p>
      </div>
    </>
  );
}
