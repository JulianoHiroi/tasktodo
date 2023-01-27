import styles from "./styles.module.css";

function Menu({ lists, handleOptionMenu }) {
  return (
    <div className={styles.container}>
      <h2>Lista de Tarefas</h2>
      {lists && (
        <div className={styles.lists}>
          {lists.map((list, key) => {
            return (
              <button
                key={key}
                onClick={() => handleOptionMenu(list.id)}
                className={styles.button}
              >
                {list.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Menu;
