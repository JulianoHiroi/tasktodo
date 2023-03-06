import { useState, useEffect } from "react";

import styles from "./styles.module.css";

import ListServevice from "../../services/ListService";

import Navbar from "../../layout/Navbar";
import Menu from "./Menu";
import Board from "../../layout/Board";
import listService from "../../services/ListService";

function User() {
  const [list, setList] = useState(null);
  const [lists, setLists] = useState();
  const [loading, setLoading] = useState(true)
  const [selectItemSearch, setSelectItemSearch] = useState(null)

  const verifyListSelect = async (id) => {
    if (list.id === id) {
      setList(null)
    }
  }
  const editName = async (nameList, id) => {
    await listService.updateList(id, { name: nameList }).then((res) => {
      getLists()
      getList(res.id)
    })
  }
  const selectList = (id) => {
    setSelectItemSearch(id)
  }
  const getList = async (id) => {
    await ListServevice.getList(id)
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getLists = async () => {
    await listService
      .getAllLists()
      .then((res) => {
        setLists(res);
      })
      .catch((err) => {
        console.log(err);
      });
    verifyLoading()
  };
  const verifyLoading = () => {
    setLoading(false)
  }

  const handleOptionMenu = async (id) => {
    getList(id);
  };
  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar lists={lists} selectList={selectList} />
      <div className={styles.body}>
        {loading && <div className={styles.containerLoading}>
          <div className={styles.loading}><span className={styles.loader}></span></div>
        </div>}
        <Menu handleOptionMenu={handleOptionMenu} verifyLoading={verifyLoading} className={styles.menu} verifyListSelect={verifyListSelect} lists={lists} getLists={getLists} selectSearchItem={selectItemSearch} />
        {list ? <Board list={list} name={list ? list.name : null} getList={getList} editName={editName} /> : <>Oi</>}
      </div>
    </div>
  );
}
export default User;
