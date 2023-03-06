import styles from "./styles.module.css";


import { BsFillFlagFill } from "react-icons/bs"

function IconDegree({ size, degree }) {
    const typeDegree = [
        styles.one, styles.two, styles.two, styles.three, styles.four, styles.five, styles.six, styles.seven
    ]

    return (
        <BsFillFlagFill styles={{ with: `${size}`, height: `${size}` }} className={`${styles.iconDegree} ${typeDegree[degree]}`} />
    )
}
export default IconDegree