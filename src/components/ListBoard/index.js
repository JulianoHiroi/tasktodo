import styles from "./styles.module.css";

function ListBoard({ list }) {
  return <li className={styles.container}>{list.name}</li>;
}

export default ListBoard;
