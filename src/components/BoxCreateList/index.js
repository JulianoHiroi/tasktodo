import styles from "./styles.module.css";

import PickerColor from "../PickerColor";
import PickerIcon from "../PickerIcon";

import {
  IoIosCloseCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";

import { useState } from "react";

function BoxCreateList({ handleCreateListOff, handlePostList }) {

  const [close, setClose] = useState(false)
  const [list, setList] = useState({
    name: "",
    color: "#f44336",
    position: 1,
    type: "home",
  });

  const HandleClickOff = () => {
    setClose(true)
    setTimeout(() => {
      handleCreateListOff();
    }, [400])


  }

  function getSelectColor(color) {
    setList({ ...list, color: color });
  }
  function getSelectType(type) {
    setList({ ...list, type: type });
  }
  const handleSubmit = () => {
    handlePostList(list);
    setClose(true)
    setTimeout(() => {
      handleCreateListOff();
    }, [300])
  };



  const handleOnChange = (e) => {
    setList({ ...list, name: e.target.value });
  };


  return (
    <div className={close ? `${styles.container} ${styles.hidden}` : `${styles.container} ${styles.startup}`}>
      <div className={styles.content}>
        <PickerIcon selectType={list.type} getType={getSelectType} />
        <input
          className={styles.input}
          type="text"
          placeholder="Digite o Nome da Lista"
          onChange={handleOnChange}
        />
        <PickerColor selectColor={list.color} getSelectColor={getSelectColor} />
      </div>
      <div className={styles.buttons}>
        <IoIosCloseCircleOutline
          className={styles.iconDelete}
          onClick={HandleClickOff}
        />
        <IoIosCheckmarkCircleOutline
          className={styles.iconCreate}
          onClick={handleSubmit}
        />
      </div>


    </div>
  );
}
export default BoxCreateList;
