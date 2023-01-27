import { useEffect, useState } from "react";

import styles from "./styles.module.css";

import ListBoard from "../../../components/ListBoard";
import api from "../../../services/api";

function Board() {
  const [lists, setLists] = useState();
  const getList = () => {
    try {
      api.get("list").then((res) => {
        setLists(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className={styles.container}>
      {lists && (
        <ul className={styles.lists}>
          {lists.map((list, key) => {
            return <ListBoard key={key} list={list} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default Board;
