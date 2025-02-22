import { PopupContext } from "../../contexts/PopupContext";
import { UserContext } from "../../contexts/UserContext";
import "../Styles/Form.css";
import "./Login.css";
import { useState, useCallback, useContext } from "react";

export default function Login() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const { handleLogin } = useContext(UserContext);
  const { handleClosePopup } = useContext(PopupContext);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setErrorMessage(target);
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const setErrorMessage = (input) => {
    const validityState = input.validity;
    const name = input.name;
    let message;

    if (validityState.valueMissing) {
      message = name === "email" ? "E-mail é necessário" : "Senha é necessária";
    } else if (validityState.typeMismatch) {
      message = "E-mail inválido";
    } else {
      message = "";
    }

    input.setCustomValidity(message);
  };

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
            className="form__input form__input_el_email"
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
            className="form__input  form__input_el_password"
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
        ou<p className="register__message">Inscreva-se</p>
      </div>
    </>
  );
}
