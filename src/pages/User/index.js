import styles from "./styles.module.css";

import Navbar from "../../layout/Navbar";
import Board from "./Board";

function User() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Board />
        <div>sdasd</div>
      </div>
    </div>
  );
}
export default User;
