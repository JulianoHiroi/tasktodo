import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from "../../assets/Logo.png";
import { BiSearchAlt } from "react-icons/bi"
import { useMemo, useState, useRef } from "react";
import { useOnClickOutside } from "../../hook/useOnClickOutside"
import TypeIcon from "../../components/TypeIcon";

function Navbar({ lists, selectList }) {

  const [search, setSearch] = useState("")
  const [showOption, setShowOption] = useState(false)

  const ref = useRef()
  useOnClickOutside(ref, () => {
    setShowOption(false)
    setSearch("")
  });

  const listsFilter = useMemo(() => {
    if (lists) {
      const lowerSearch = search.toLowerCase();
      return lists.filter((list) => list.name.toLowerCase().includes(lowerSearch))
    }
  }, [search, lists])

  const handleOnClickSearch = () => {
    setShowOption(true)
  }
  const handleOnClick = (id) => {
    selectList(id)
    setShowOption(false)
  }
  const handleOnChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <ul className={styles.list}>
        <div className={styles.SearchBox} ref={ref}>
          <div className={styles.Search}>
            <input type="text" onChange={handleOnChange} placeholder="Buscar..." className={styles.barSearch} onClick={handleOnClickSearch} value={search} />
            <BiSearchAlt size={"25px"} className={styles.iconSearch} onClick={handleOnClickSearch} />
          </div>
          {showOption &&
            <div>
              <hr className={styles.line} />
              <ul className={styles.listSearch}>
                {listsFilter && listsFilter.map((list, key) => {
                  return (
                    <li value={list.name} key={key} onClick={() => handleOnClick(list.id)} className={styles.optionSearch}> <p className={styles.nameItem}>{list.name} </p><div className={styles.IconItem}><TypeIcon selectIcon={list.type} size={"20px"} /></div></li>
                  )
                })}
                {listsFilter.length === 0 && <p className={styles.msgNotFound} >Nenhum item encontrado...</p>}
              </ul>
            </div>}
        </div>
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
    </nav >
  );
}
export default Navbar;
