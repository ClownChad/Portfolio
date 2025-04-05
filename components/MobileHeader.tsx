import styles from "./MobileHeader.module.css"
import { FaBars } from "react-icons/fa"

export default function MobileHeader(){
  const content = (
    <div className={styles.header}>
      <FaBars
        size={"3rem"}
      />
    </div>
  )

  return content;
}