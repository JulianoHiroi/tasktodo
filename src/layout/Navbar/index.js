import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from "../../assets/LogoTaskToDo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.option} to="/">
            Menu
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.option} to="/user">
            MyTasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
