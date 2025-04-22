"use client"

import styles from "./MobileHeader.module.css"
import { FaBars } from "react-icons/fa"
import { FaX } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function MobileHeader(){
  const [isMobile, setIsMobile] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  const toggleNav = () => {
    setHeaderOpen(!headerOpen);
  }
  
  const content = (
    <div className={styles.header_cont}>
      <div className={styles.mobile_header}>
        {!headerOpen ? (
          <FaBars
            className={styles.header_toggle} 
            size={"3rem"} 
            onClick={toggleNav} 
          />
        ) : (
          <FaX 
            className={styles.header_toggle} 
            size={"3rem"} 
            onClick={toggleNav} 
          />
        )}
      </div>

      <Header 
        isMobile={isMobile}
        headerOpen={headerOpen}
      />
    </div>
  )

  return content;
}