import "../Styles/Form.css";
import "./Login.css";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="form form_login" name="login" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset form__fieldset_el_email">
          <label for="email-input" className="form__label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            className="form__input form__input_el_email"
            placeholder="Insira e-mail"
            required
          />
          <span className="email-input-error form__input-error"></span>
        </fieldset>

        <fieldset className="form__fieldset form__fieldset_el_password">
          <label for="password-input" className="form__label">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            className="form__input  form__input_el_password"
            placeholder="Insira senha"
            required
          />
          <span className="password-input-error form__input-error"></span>
        </fieldset>

        <button
          type="submit"
          name="submit"
          className="form__button form__button_login form__button_disabled"
          disabled="true"
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
