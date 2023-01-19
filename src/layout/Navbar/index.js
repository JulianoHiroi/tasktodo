import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>TaskToDo</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.option} to="/">
            Menu
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.option} to="/mytasks">
            MyTasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
