import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import { PopupContext } from "../../contexts/PopupContext";
import { UserContext } from "../../contexts/UserContext";
import useFormValidation from "../../utils/useFormValidation";
import Login from "../Login/Login";
import "../Styles/Form.css";
import "./Register.css";
import { useContext } from "react";

export default function Register({ errorMessage }) {
  const { t } = useTranslation();
  const { handleRegister } = useContext(UserContext);
  const { handleOpenPopup, handleClosePopup } = useContext(PopupContext);

  const errorMessages = {
    email: {
      valueMissing: t("register.error.email.valueMissing"),
      typeMismatch: t("register.error.email.typeMismatch"),
    },
    password: {
      valueMissing: t("register.error.password.valueMissing"),
      tooShort: t("register.error.password.tooShort"),
    },
    name: {
      valueMissing: t("register.error.name.valueMissing"),
      tooShort: t("register.error.name.tooShort"),
      tooLong: t("register.error.name.tooLong"),
    },
  };

  const { errors, isValid, handleChange } = useFormValidation(errorMessages);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const obj = Object.fromEntries(data.entries());

    handleRegister(obj);
  };

  const openLogin = () => {
    handleClosePopup();
    const loginPopup = {
      title: t("register.signinTitle"),
      children: <Login />,
    };
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
            {t("register.email.label")}
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            className="form__input form__input_popup form__input_el_email"
            placeholder={t("register.email.placeholder")}
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
            {t("register.password.label")}
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            className="form__input form__input_popup form__input_el_password"
            placeholder={t("register.password.placeholder")}
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
            {t("register.username.label")}
          </label>
          <input
            type="name"
            name="name"
            id="name-input"
            className="form__input form__input_popup form__input_el_name"
            placeholder={t("register.username.placeholder")}
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

        {errorMessage && (
          <span className="register-input-error form__input-error">
            {errorMessage.message}
          </span>
        )}

        <button
          type="submit"
          name="submit"
          className={`form__button form__button_register ${
            !isValid ? "form__button_disabled" : ""
          }`}
          disabled={!isValid}
        >
          {t("register.submit")}
        </button>
      </form>

      <div className="login">
        {t("register.or")}
        <p className="login__message" onClick={openLogin}>
          {t("register.signinTitle")}
        </p>
      </div>
    </>
  );
}
