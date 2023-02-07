import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

function PickerColor({ selectColor, getSelectColor }) {
  const [color, setColor] = useState(selectColor);
  const [showSelectColor, setShowSelectColor] = useState(false);
  let changeColor = false;

  const ref = useRef(null);
  const refButtonColor = useRef(null);

  const handleOnChange = async (e) => {
    setColor(e.target.value);
  };
  const handleOnClickColor = () => {
    if (showSelectColor === true) { getSelectColor(color) }
    setShowSelectColor(!showSelectColor);

  };
  const handleClickOutside = async (event) => {
    if ((ref.current && !ref.current.contains(event.target)) && !refButtonColor.current.contains(event.target)) {
      getSelectColor(color)
      setShowSelectColor(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      if (changeColor === true) { getSelectColor(color) }
    };
  }, [color]);

  return (
    <div className={styles.container}>
      <button
        className={styles.buttonColor}
        style={{ backgroundColor: color }}
        onClick={handleOnClickColor}
        ref={refButtonColor}
      ></button>
      {showSelectColor && (
        <div className={styles.pickerColor} ref={ref}>
          <input
            type="radio"
            className={styles.circle_1}
            name="color"
            value="#f44336"
            checked={color === "#f44336"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_2}
            name="color"
            value="#03a9f4"
            checked={color === "#03a9f4"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_3}
            name="color"
            value="#ffeb3b"
            checked={color === "#ffeb3b"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_4}
            name="color"
            value="#e91e63"
            checked={color === "#e91e63"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_5}
            name="color"
            value="#00bcd4"
            checked={color === "#00bcd4"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_6}
            name="color"
            value="#ffc107"
            checked={color === "#ffc107"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_7}
            name="color"
            value="#9c27b0"
            checked={color === "#9c27b0"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_8}
            name="color"
            value="#009688"
            checked={color === "#009688"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_9}
            name="color"
            value="#ff9800"
            checked={color === "#ff9800"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_10}
            name="color"
            value="#673ab7"
            checked={color === "#673ab7"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_11}
            name="color"
            value="#4caf50"
            checked={color === "#4caf50"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_12}
            name="color"
            value="#ff5722"
            checked={color === "#ff5722"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_13}
            name="color"
            value="#3f51b5"
            checked={color === "#3f51b5"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_14}
            name="color"
            value="#8bc34a"
            checked={color === "#8bc34a"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_15}
            name="color"
            value="#795548"
            checked={color === "#795548"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_16}
            name="color"
            value="#2196f3"
            checked={color === "#2196f3"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_17}
            name="color"
            value="#cddc39"
            checked={color === "#cddc39"}
            onChange={handleOnChange}
          ></input>
          <input
            type="radio"
            className={styles.circle_18}
            name="color"
            value="#607d8b"
            checked={color === "#607d8b"}
            style={{ backgroundColor: "#607d8b" }}
            onChange={handleOnChange}
          ></input>
        </div>
      )}

    </div>
  );
}
export default PickerColor;
