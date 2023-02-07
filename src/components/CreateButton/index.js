import styles from "./styles.module.css"
import { IoMdAdd } from "react-icons/io";

function CreateButton({ msg, handleOnClick }) {
  return <button className={styles.button} onClick={handleOnClick}><IoMdAdd />{msg}</button>;
}
export default CreateButton;
