import styles from "./styles.module.css";

function Board({ tasks }) {
  return (
    <div className={styles.container}>
      {tasks && (
        <div className={styles.board}>
          {tasks.map((task, key) => {
            return (
              <div key={key} className={styles.task}>
                <p>
                  {task.name} {task.degree}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Board;
