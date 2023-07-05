import { useState } from "react";
import { useApi } from "../../context/UseApi";
import styles from "./LoginForm.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Button";

export function LoginForm() {
  const { authenticated } = useApi();
  const [apiKey, setApikey] = useState("");

  const handleSubmit = async () => {
    await authenticated(apiKey);
  };
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.login}>
        <label htmlFor="apiKey">Entre com sua chave API?</label>
        <input
          type="password"
          id="apiKey"
          onBlur={(e) => setApikey(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Entrar
        </Button>
        <p>
          Caso não possua uma chave, realize o cadastro no RapidAPI clicando{" "}
          <a
            target="_blank"
            href="https://rapidapi.com/malaaddincelik/api/fitness-calculator"
          >
            aqui
          </a>{" "}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}
