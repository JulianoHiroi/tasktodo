import styles from "./styles.module.css";

import { HiTrash } from "react-icons/hi"
import { AiTwotoneEdit } from "react-icons/ai"

import IconDegree from "../IconDegree";

import { useState } from "react";

function CardTask({ task, handleDeleteCard, handleOpenOverlay }) {

    const [showDescription, setShowDescription] = useState(false)
    const [showAnimation, setShowAnimation] = useState(false)
    const handleOnClickTrash = () => {
        handleDeleteCard(task.id)
    }
    const handleOnClickEdit = () => {
        handleOpenOverlay(task)
    }
    const handleShowInformation = () => {
        setShowAnimation(true)
        setTimeout(() => {
            setShowDescription(!showDescription)
        }, 250)
        setTimeout(() => {
            setShowAnimation(false)
        }, 500)
    }
    return (
        <li className={styles.container}>
            <HiTrash className={styles.iconTrash} onClick={handleOnClickTrash} />
            <AiTwotoneEdit className={styles.iconEdit} onClick={handleOnClickEdit} />
            <div className={styles.iconDegree}><IconDegree size="20px" degree={task.degree} /></div>
            <div className={`${styles.contentInformation} ${showAnimation && styles.changeText} `} onClick={handleShowInformation}>
                {showDescription ? <p className={styles.description}>{task.description}</p> : <p className={styles.name}>{task.name}</p>}
            </div>


        </li>
    )
}
export default CardTask