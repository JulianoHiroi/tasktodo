import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io"
import IconDegree from "../IconDegree";
function OverlayTask({ listId, postTask, handleCloseOverlay, taskEdit, updateTask, textButton }) {
    const ref = useRef(null)
    const [animationError, setAnimationError] = useState(false)
    const [error, setError] = useState({ name: false, description: false, state: false })
    const ClickOutOverlay = (e) => {
        if (ref.current.contains(e.target) === false) {
            handleCloseOverlay()
        }
    }
    const [task, setTask] = useState({
        name: "",
        description: "",
        degree: 0,
        state: "",
        listId: listId
    })
    const handlePressKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    const makeAnimationError = () => {
        setAnimationError(true)
        setTimeout(() => setAnimationError(false), 500)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let err = null;
        if (!task.name) {
            err = { ...err, name: true };
        } if (!task.description) {
            err = { ...err, description: true };
        }
        if (!task.state) {
            err = { ...err, state: true };
        }
        if (err) {
            setError(err)
            makeAnimationError()
            return
        }
        if (taskEdit) {
            updateTask(task)
        } else {
            postTask(task)
        }
        handleCloseOverlay()
    }
    useEffect(() => {
        if (taskEdit) {
            setTask({
                id: taskEdit.id,
                name: taskEdit.name,
                description: taskEdit.description,
                degree: taskEdit.degree,
                state: taskEdit.state,
                listId: taskEdit.listId
            })
        }
    }, [])
    const handleOnChange = (e) => {
        if (e.target.name === "degree") {
            setTask({ ...task, [e.target.name]: Number(e.target.value) })
        } else {
            setTask({ ...task, [e.target.name]: e.target.value })
        }
    }
    return (
        <div className={styles.container} onKeyDownCapture={handlePressKey}>
            <div className={`${styles.overlay} ${animationError && styles.errorAnimation}`} onMouseDown={ClickOutOverlay} >
                <form onSubmit={handleSubmit} className={styles.forms} ref={ref} >
                    <div className={styles.reference}>
                        <IoMdClose className={styles.close} onClick={handleCloseOverlay} />
                    </div>
                    <div className={`${styles.itemForms} ${error.name && styles.error}`}>
                        <label>Nome da Task : </label>
                        <input type="text" onChange={handleOnChange} name="name" value={task.name} className={styles.inputName} />
                    </div>
                    <div className={`${styles.itemForms} ${error.description && styles.error}`}>
                        <label>Descrição : </label>
                        <textarea placeholder="Digite a descrição da task" onChange={handleOnChange} name="description" value={task.description} className={styles.inputTextArea} />
                    </div>
                    <div className={styles.itemDegree}>
                        <label>Prioridade : </label>
                        <input type="range" min={0} max={5} name="degree" value={task.degree} onChange={handleOnChange} className={styles.inputDegree} />
                        <div className={styles.iconFlag}><IconDegree degree={task.degree} size={"25px"} /></div>
                    </div>
                    <div className={`${styles.itemForms} ${error.state && styles.error}`}>
                        <label>Situação: </label>
                        <div>
                            <input type="radio" name="state" value={"pendente"} onChange={handleOnChange} checked={taskEdit && task.state === "pendente"} /><label>Pendente</label>
                            <input type="radio" name="state" value={"andamento"} onChange={handleOnChange} checked={taskEdit && task.state === "andamento"} /><label>Andamento</label>
                            <input type="radio" name="state" value={"concluido"} onChange={handleOnChange} checked={taskEdit && task.state === "concluido"} /><label>Concluído</label>
                        </div>
                    </div>
                    <div className={styles.containerCreateButton}>
                        <button type="submit" className={styles.createButton} >{textButton}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default OverlayTask