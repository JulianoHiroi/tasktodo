import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from "../../assets/Logo.png";

import { HiMenu } from "react-icons/hi"

function Navbar({ handleButtonMenu }) {


  return (
    <nav className={styles.navbar}>
      <button className={styles.buttonMenu} onClick={handleButtonMenu}><HiMenu size={"25px"} /></button>
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
