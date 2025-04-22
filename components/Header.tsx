import styles from "./Header.module.css"
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa"

export default function Header({isMobile, headerOpen}: {isMobile: boolean, headerOpen: boolean}){
    const content = (
        <header 
            className={
                !isMobile ? styles.header :
                headerOpen ? `${styles.header} ${styles.open}` : 
                `${styles.header} ${styles.closed}`
            }
        >
            <div className={styles.name_cont}>
                <div className={styles.photo_cont}>
                    <Image 
                        className={styles.photo}
                        src={"./resume_photo.jpg"}
                        width={100}
                        height={100}
                        alt="Picture of portfolio author Chad Jones"
                    />
                </div>

                <div className={styles.text_cont}>
                    <div className={styles.name}>Chad Jones</div>
                </div>                
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <Link className={styles.nav_link} href="/">
                        <li>Home</li>
                    </Link>
                    
                    <Link className={styles.nav_link} href="/projects">
                        <li>Projects</li>
                    </Link>

                </ul>   
            </nav>

            <div className={styles.contact_cont}>
                <Link className={styles.icon_link} 
                    href="https://www.linkedin.com/in/chad-j-524825348/"
                    target="_blank"
                >
                    <FaLinkedin 
                        className={styles.icon_linkedin}
                        size={!isMobile ? '2rem' : '3rem'}
                    />
                </Link>
                <Link 
                    className={styles.icon_link} href="https://github.com/ClownChad"
                    target="_blank"
                >
                    <FaGithub 
                        className={styles.icon_github}
                        size={!isMobile ? '2rem' : '3rem'}
                    />
                </Link>
                <Link
                    className={styles.icon_link} href="https://www.kaggle.com/clownchad/code"
                    target="_blank"
                >
                    <FaKaggle 
                        className={styles.icon_kaggle}
                        size={!isMobile ? '2rem' : '3rem'}
                    />
                </Link>
            </div>
        </header>
    )

    return content;
}