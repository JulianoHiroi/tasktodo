import styles from "./styles.module.css";

import CardTask from "../CardTask";

function Frame({ tasks, handleDeleteCard, text, handleOpenOverlay }) {
    return (
        <div className={styles.container}>
            <p className={styles.text} >{text} : </p>
            <ul className={styles.tasks}>
                {tasks.length !== 0 ? tasks.map((task, key) => {
                    return (
                        <CardTask key={key} task={task} handleDeleteCard={handleDeleteCard} handleOpenOverlay={handleOpenOverlay} />
                    );
                }) : <h3>Ainda não foi feita nenhuma Task</h3>}
            </ul>
        </div>
    )
}
export default Frame