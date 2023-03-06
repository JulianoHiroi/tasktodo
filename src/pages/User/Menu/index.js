import CreateButton from "../../../components/CreateButton";
import BoxCreateList from "../../../components/BoxCreateList";
import listService from "../../../services/ListService";

import { HiTrash, HiMenu } from "react-icons/hi"
import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import TypeIcon from "../../../components/TypeIcon";

function Menu({ handleOptionMenu, verifyLoading, verifyListSelect, lists, getLists, selectSearchItem }) {
  const [showBoxCreate, setShowBoxCreate] = useState(false);
  const [itemChecked, setItemChecked] = useState("");
  const [closeItem, setCloseItem] = useState("")
  const [showMenu, setShowMenu] = useState(true)
  const [startUpItem, setStartUpItem] = useState(null)


  const handleButtonMenu = () => {
    setShowBoxCreate(false)
    setShowMenu(!showMenu)
  }
  const handleOnClickItems = (id) => {
    handleOptionMenu(id)
    setItemChecked(id)
  }
  const handleOnClickDelete = async (id) => {
    await listService.deleteList(id).then(() => { verifyListSelect(id) }).catch((err) => { console.log(err) })
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
    if (selectSearchItem) {
      handleOptionMenu(selectSearchItem)
      setItemChecked(selectSearchItem)
    }

  }, [selectSearchItem])

  return (
    <div className={showMenu ? styles.container : styles.container2}>
      <div className={styles.cabeçario}><button className={styles.buttonMenu} onClick={handleButtonMenu}><HiMenu size={"25px"} color={"white"} /></button><h2 className={styles.title}>Lista de Tarefas</h2></div>

      <hr className={styles.line} />
      <div className={showMenu ? styles.centalizer : styles.hidden}><CreateButton msg="Criar Lista" handleOnClick={handleCreateList} /></div>
      <hr className={styles.line} />
      <div className={styles.centalizer}>
        {showBoxCreate && (
          <BoxCreateList
            handleCreateListOff={handleCreateListOff}
            handlePostList={handlePostList}
          />
        )}
      </div>
      <div className={styles.options}>
        {lists && (
          <div className={styles.lists}>
            {lists.map((list, key) => {
              return (
                <div
                  key={key}
                  onClick={() => handleOnClickItems(list.id)}
                  className={`${closeItem === list.id && styles.hiddenItems} ${startUpItem === list.name && styles.startupItems} ${showMenu ? styles.items : styles.itemsRetratc}`}
                  style={itemChecked === list.id ? {
                    borderColor: list.color,
                    boxShadow: "0 0 40px 40px rgb(55, 55, 55) inset"
                  } : { borderColor: list.color }}
                >
                  <div className={styles.iconType}><TypeIcon size="25px" selectIcon={list.type} /></div>
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
