import { useState, useEffect } from "react";

import styles from "./styles.module.css";

import ListServevice from "../../services/ListServevice";

import Navbar from "../../layout/Navbar";
import Menu from "./Menu";
import Board from "./Board";

function User() {
  const [lists, setLists] = useState();
  const [list, setList] = useState();

  const getlists = async () => {
    await ListServevice.getAllLists()
      .then((res) => {
        setLists(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getlist = async (id) => {
    await ListServevice.getList(id)
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getlists();
  }, []);

  const handleOptionMenu = async (id) => {
    getlist(id);
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Menu lists={lists} handleOptionMenu={handleOptionMenu} />
        {list && <Board tasks={list.tasks} />}
      </div>
    </div>
  );
}
export default User;
