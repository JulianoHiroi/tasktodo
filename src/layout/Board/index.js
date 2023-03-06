import styles from "./styles.module.css";

import taskService from "../../services/TaskServive"

import OverlayTask from "../../components/OverlayTask";


import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "../../hook/useOnClickOutside";
import { BiAddToQueue } from "react-icons/bi"
import Frame from "../../components/Frame";

function Board({ list, getList, editName }) {
    const [showOverlay, setShowOverlay] = useState(false)
    const [showEditNameList, setShowEditNameList] = useState(false)
    const [taskEdit, setTaskEdit] = useState(null)
    const [nameList, setNameList] = useState()
    const [tasks, setTasks] = useState({ pendente: [], andamento: [], concluido: [] })

    const ref = useRef()
    useOnClickOutside(ref, () => {
        setShowEditNameList(false)
        setNameList(list.name)
    });

    const handleCreateTask = () => {
        setShowOverlay(true)
    }
    const handlePressKey = (e) => {
        if (e.key === "Enter") {
            editName(nameList, list.id).then(() => setShowEditNameList(false))
        }
    }
    const handleOpenOverlay = (taskedit) => {
        setTaskEdit(taskedit)
        setShowOverlay(true)
    }
    const postTask = async (task) => {
        await taskService.postTask(task)
        await getList(list.id)
    }
    const updateTask = async (task) => {
        await taskService.updateTask(task)
        await getList(list.id)
    }
    const handleDeleteCard = async (id) => {
        await taskService.deletePost(id).catch((err) => console.log(err))
        getList(list.id)
    }
    const handleOnChangeName = (e) => {
        e.preventDefault()
        setNameList(e.target.value)
    }
    const handleClickName = () => {
        setShowEditNameList(true)
    }
    const handleCloseOverlay = () => {
        setShowOverlay(false)
        setTaskEdit(null)
    }
    useEffect(() => {
        setShowOverlay(false)
        setNameList(list.name)
        if (list) {
            setTasks({
                pendente: list.tasks.filter((task) => task.state === "pendente"),
                andamento: list.tasks.filter((task) => task.state === "andamento"),
                concluido: list.tasks.filter((task) => task.state === "concluido")
            })
        }
    }, [list]);
    return (
        <div className={styles.container}>
            {showOverlay && <OverlayTask listId={list.id} postTask={postTask} handleCloseOverlay={handleCloseOverlay} updateTask={updateTask} taskEdit={taskEdit} textButton={taskEdit ? "Editar" : "Criar"} />}
            <div className={styles.board}>
                <div className={styles.content}>

                    <div className={styles.head}>
                        <button onClick={handleCreateTask} className={styles.buttonCreate}>Criar <BiAddToQueue /></button>
                        <div className={styles.contentName}>
                            <h1 onClick={handleClickName} className={`${styles.titleName} ${showEditNameList && styles.hidden}`}>{nameList}</h1>
                            <input type="text" value={nameList ? nameList : ""} onChange={handleOnChangeName} ref={ref} onKeyDownCapture={handlePressKey} className={`${styles.inputName} ${!showEditNameList && styles.hidden} ${!nameList && styles.sizeMin}`} size={`${nameList && nameList.length}`} />
                        </div>

                    </div>
                    <div className={styles.tasks} >
                        <Frame tasks={tasks.pendente} handleDeleteCard={handleDeleteCard} text="Pendente" handleOpenOverlay={handleOpenOverlay} />
                        <Frame tasks={tasks.andamento} handleDeleteCard={handleDeleteCard} text="Andamento" handleOpenOverlay={handleOpenOverlay} />
                        <Frame tasks={tasks.concluido} handleDeleteCard={handleDeleteCard} text="Concluído" handleOpenOverlay={handleOpenOverlay} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board