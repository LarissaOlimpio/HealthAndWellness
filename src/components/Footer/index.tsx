import styles from "./Footer.module.css";
import logoGitHub from "./logoGitHub.svg";
import logoLinkedin from "./logoLinkedin.svg";

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>Desenvolvido por Larissa Olimpio</p>
      <a href="https://github.com/LarissaOlimpio" target="_blank">
        <img src={logoGitHub} alt="logoGitHub" />
      </a>
      <a href="https://www.linkedin.com/in/larissaolimpio/" target="_blank">
        <img src={logoLinkedin} alt="logoLinkedin" />
      </a>
    </div>
  );
}
