import styles from "./NavLink.module.css";
export function NavLink() {
  const clearDataLocalStorage = () => {
    localStorage.removeItem("apiKey");
    localStorage.removeItem("formData")
    location.reload();
  };

  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={clearDataLocalStorage}>
              LogOut
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
