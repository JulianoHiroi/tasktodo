import CreateButton from "../../../components/CreateButton";
import BoxCreateList from "../../../components/BoxCreateList";
import listService from "../../../services/ListServevice";

import { HiTrash } from "react-icons/hi"

import styles from "./styles.module.css";

import { useState, useEffect } from "react";
import TypeIcon from "../../../components/TypeIcon";

function Menu({ handleOptionMenu, verifyLoading, showMenu }) {
  const [showBoxCreate, setShowBoxCreate] = useState(false);
  const [itemChecked, setItemChecked] = useState("");
  const [lists, setLists] = useState();
  const [closeItem, setCloseItem] = useState("")
  const [startUpItem, setStartUpItem] = useState(null)

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
  const handleOnClickItems = (id) => {
    handleOptionMenu(id)
    setItemChecked(id)
  }
  const handleOnClickDelete = async (id) => {
    await listService.deleteList(id).then(() => { }).catch((err) => { console.log(err) })
    setCloseItem(id)
    getLists();
  }
  const handleCreateList = () => {
    setShowBoxCreate(true);
  };
  const handleCreateListOff = () => {
    setShowBoxCreate(false);
  };

  const handlePostList = async (list) => {
    await listService
      .postList(list)
      .then((res) => {
        getLists();
        setStartUpItem(list.name);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setStartUpItem(null)
    }, 500);
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <div className={showMenu ? styles.container : styles.container2}>
      <h2 className={styles.title}>Lista de Tarefas</h2>
      <hr className={styles.line} />
      <CreateButton msg="Criar Lista" handleOnClick={handleCreateList} />
      <hr className={styles.line} />
      {showBoxCreate && (
        <BoxCreateList
          handleCreateListOff={handleCreateListOff}
          handlePostList={handlePostList}
        />
      )}
      <div className={styles.options}>
        {lists && (
          <div className={styles.lists}>
            {lists.map((list, key) => {
              return (
                <div
                  key={key}
                  onClick={() => handleOnClickItems(list.id)}
                  className={`${closeItem === list.id && styles.hiddenItems} ${startUpItem === list.name && styles.startupItems} ${styles.items}`}
                  style={itemChecked === list.id ? {
                    borderColor: list.color,
                    boxShadow: "0 0 40px 40px rgb(55, 55, 55) inset"
                  } : { borderColor: list.color }}
                >
                  <TypeIcon size="25px" selectIcon={list.type} />
                  <p className={styles.nameList} >{list.name}</p>
                  <HiTrash size="20px" className={styles.iconTrash} onClick={() => handleOnClickDelete(list.id)} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
