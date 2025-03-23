import styles from "./Header.module.css"
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa"

export default function Header(){
    const content = (
        <header className={styles.header}>
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
                    <div className={styles.title}>Data Analyst</div>
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
                <Link className={styles.icon_link} href="clownchad@gmail.com">
                    <FaEnvelope 
                        className={styles.icon}
                        size={'2rem'}
                    />
                </Link>
                <Link className={styles.icon_link} href="https://www.linkedin.com/in/chad-j-524825348/">
                    <FaLinkedin 
                        className={styles.icon}
                        size={'2rem'}
                    />
                </Link>
                <Link className={styles.icon_link} href="https://github.com/ClownChad">
                    <FaGithub 
                        className={styles.icon}
                        size={'2rem'}
                    />
                </Link>
                <Link className={styles.icon_link} href="https://www.kaggle.com/clownchad/code">
                    <FaKaggle 
                        className={styles.icon_kaggle}
                        size={'2rem'}
                    />
                </Link>
            </div>
        </header>
    )

    return content;
}