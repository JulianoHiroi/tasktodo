import styles from "./styles.module.css"

import { MdFamilyRestroom } from "react-icons/md";
import { FaRunning } from "react-icons/fa"
import { GiStairsGoal } from "react-icons/gi"
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookFill, BsFillBagFill, BsFillCartFill, BsFillHouseFill, BsPersonCircle, BsFillLightbulbFill } from "react-icons/bs";
import { HiCalendar, HiClipboardList } from "react-icons/hi";

function TypeIcon({ selectIcon, color, size }) {
    return (<div className={styles.container}>
        {selectIcon === "home" ? <BsFillHouseFill size={size} color={color} /> :
            selectIcon === "work" ? <BsFillBagFill size={size} color={color} /> :
                selectIcon === "exercise" ? <FaRunning size={size} color={color} /> :
                    selectIcon === "health" ? <AiFillHeart size={size} color={color} /> :
                        selectIcon === "event" ? <HiCalendar size={size} color={color} /> :
                            selectIcon === "shopping" ? <BsFillCartFill size={size} color={color} /> :
                                selectIcon === "life" ? <BsPersonCircle size={size} color={color} /> :
                                    selectIcon === "purpose" ? <GiStairsGoal size={size} color={color} /> :
                                        selectIcon === "ideia" ? <BsFillLightbulbFill size={size} color={color} /> :
                                            selectIcon === "project" ? <HiClipboardList size={size} color={color} /> :
                                                selectIcon === "study" ? <BsFillBookFill size={size} color={color} /> :
                                                    selectIcon === "family_events" && <MdFamilyRestroom size={size} color={color} />
        }</div>)
}
export default TypeIcon