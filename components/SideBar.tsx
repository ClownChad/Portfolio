"use client"
import styles from "./SideBar.module.css"
import { useState } from "react";

export default function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleSideBar = () => {
        setIsExpanded(!isExpanded);
    }

    const content = (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebar_list}>
                <li>Dividend Champion Gap Theory</li>
                <li>Cafe Sales Analysis</li>
                <li>Apple Stock Exploratory Analysis</li>
            </ul>
        </aside>
    )

    return content;
}