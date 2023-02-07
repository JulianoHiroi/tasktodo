import styles from "./styles.module.css";

import { MdFamilyRestroom } from "react-icons/md";
import { FaRunning } from "react-icons/fa"
import { GiStairsGoal } from "react-icons/gi"
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookFill, BsFillBagFill, BsFillCartFill, BsFillHouseFill, BsPersonCircle, BsFillLightbulbFill } from "react-icons/bs";
import { HiCalendar, HiClipboardList } from "react-icons/hi";

import { useState, useEffect } from "react";

import TypeIcon from "../TypeIcon";
import { useRef } from "react";

function PickerIcon({ selectType, getType }) {
  const [selectIcon, setSelectIcon] = useState(selectType)
  const [showSelectIcon, setShowSelectIcon] = useState(false);

  const ref = useRef(null)
  const refButton = useRef(null)

  const style = { borderRadius: "5px", backgroundColor: "black", color: "white" }
  const handleOnClick = (value) => {
    setSelectIcon(value)
  };
  const handleOnClickIcon = () => {
    setShowSelectIcon(!showSelectIcon)
  }
  const handleClickOutside = async (event) => {
    if ((ref.current && !ref.current.contains(event.target)) && !refButton.current.contains(event.target)) {
      setShowSelectIcon(false)
      getType(selectIcon);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [selectIcon]);


  return (
    <div>
      <button onClick={handleOnClickIcon} className={styles.button} ref={refButton}>
        <TypeIcon size="25px" color="black" selectIcon={selectIcon} />
      </button>
      {showSelectIcon && (
        <div className={styles.container}>
          <div className={styles.content} ref={ref}>
            <BsFillHouseFill
              className={`${styles.icon}`}
              onClick={() => handleOnClick("home")}
              style={selectIcon === "home" && style}
            />
            <BsFillBagFill
              className={styles.icon}
              onClick={() => handleOnClick("work")}
              style={selectIcon === "work" && style}
            />
            <FaRunning
              className={styles.icon}
              onClick={() => handleOnClick("exercise")}
              style={selectIcon === "exercise" && style}
            />
            <AiFillHeart
              className={styles.icon}
              onClick={() => handleOnClick("health")}
              style={selectIcon === "health" && style}
            />
            <HiCalendar
              className={styles.icon}
              onClick={() => handleOnClick("event")}
              style={selectIcon === "event" && style}
            />
            <BsFillCartFill
              className={styles.icon}
              onClick={() => handleOnClick("shopping")}
              style={selectIcon === "shopping" && style}
            />
            <BsPersonCircle
              className={styles.icon}
              onClick={() => handleOnClick("life")}
              style={selectIcon === "life" && style}
            />
            <GiStairsGoal
              className={styles.icon}
              onClick={() => handleOnClick("purpose")}
              style={selectIcon === "purpose" && style}
            />
            <BsFillLightbulbFill
              className={styles.icon}
              onClick={() => handleOnClick("ideia")}
              style={selectIcon === "ideia" && style}
            />
            <HiClipboardList
              className={styles.icon}
              onClick={() => handleOnClick("project")}
              style={selectIcon === "project" && style}
            />
            <BsFillBookFill
              className={styles.icon}
              onClick={() => handleOnClick("study")}
              style={selectIcon === "study" && style}
            />
            <MdFamilyRestroom
              className={styles.icon}
              onClick={() => handleOnClick("family_events")}
              style={selectIcon === "family_events" && style}
            />
          </div>
        </div>
      )
      }
    </div >
  );
}
export default PickerIcon;
