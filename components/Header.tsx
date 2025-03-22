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
                <FaEnvelope 
                    className={styles.icon}
                    size={'2rem'}
                />
                <FaLinkedin 
                    className={styles.icon}
                    size={'2rem'}
                />
                <FaGithub 
                    className={styles.icon}
                    size={'2rem'}
                />
                <FaKaggle 
                    className={styles.icon_kaggle}
                    size={'2rem'}
                />
            </div>
        </header>
    )

    return content;
}