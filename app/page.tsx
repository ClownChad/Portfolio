import styles from "./page.module.css";

export default function Home() {
  const content = (
    <main className={styles.main}>
      <div className={styles.about_me_cont}>
        <div className={styles.about_me_title}>About Me</div>
        <div className={styles.about_me}>
          <p>With nearly 12 years of experience as a hobbyist programmer, I discovered a passion for data analytics through my studies. Since entering the workforce at age 14, I have utilized spreadsheets to manage finances and organize personal projects. Now, after completing multiple portfolio projects and the Google DA Certificate, I&#39;m equipped with professional knowledge and eager to transition into the field as a Data Analyst.</p>
        </div>
      </div>
    </main>
  )
  
  return content;
}
