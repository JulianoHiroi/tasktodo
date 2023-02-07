import { useState } from "react";

import styles from "./styles.module.css";

import ListServevice from "../../services/ListServevice";

import Navbar from "../../layout/Navbar";
import Menu from "./Menu";

function User() {
  const [list, setList] = useState(null);
  const [showMenu, setShowMenu] = useState(true)
  const [loading, setLoading] = useState(true)

  const getList = async (id) => {
    await ListServevice.getList(id)
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const verifyLoading = () => {
    setLoading(false)
  }
  const handleButtonMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleOptionMenu = async (id) => {
    getList(id);
  };
  return (
    <div className={styles.container}>
      <Navbar handleButtonMenu={handleButtonMenu} />
      <div className={styles.body}>
        {loading && <div className={styles.containerLoading}>
          <div className={styles.loading}><span className={styles.loader}></span></div>
        </div>}
        <Menu handleOptionMenu={handleOptionMenu} verifyLoading={verifyLoading} className={styles.menu} showMenu={showMenu} />
        <div className={styles.board}>
          {!list ? <div>Seja bem vindo!!</div> : (
            <div >
              {list.task ? list.tasks.map((task, key) => {
                return (
                  <div key={key} className={styles.task}>
                    <p>
                      {task.name} {task.degree}
                    </p>
                  </div>
                );
              }) : <h1>Oi</h1>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default User;
