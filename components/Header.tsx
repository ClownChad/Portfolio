import styles from "./Header.module.css"
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa"

export default function Header(){
    const content = (
        <header className={styles.header}>
            <div className={styles.name_cont}>
                <div className={styles.photo_cont}>
                    <Image 
                        className={styles.photo}
                        src={"/resume_photo.jpg"}
                        width={100}
                        height={100}
                        alt="Picture of portfolio author Chad Jones"
                    />
                </div>

                <div className={styles.text_cont}>
                    <div className="name">Chad Jones</div>
                    <div className="title">Data Analyst</div>
                </div>                
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.list_item}><a href="#">Home</a></li>
                    <li className={styles.list_item}><a href="#">Projects</a></li>

                </ul>   
            </nav>

            <div className={styles.contact_cont}>
                <a href="clownchad@gmail.com">
                    <FaEnvelope 
                        className={styles.icon}
                        size={'2rem'}
                    />
                </a>
                <a href="https://www.linkedin.com/in/chad-j-524825348/">
                    <FaLinkedin 
                        className={styles.icon}
                        size={'2rem'}
                    />
                </a>
                <a href="https://github.com/ClownChad">
                    <FaGithub 
                        className={styles.icon}
                        size={'2rem'}
                    />
                </a>
                <a href="https://www.kaggle.com/clownchad/code">
                    <FaKaggle 
                        className={styles.icon_kaggle}
                        size={'2rem'}
                    />
                </a>
            </div>
        </header>
    )

    return content;
}