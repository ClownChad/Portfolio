import styles from "./page.module.css";

export default function Home() {
  const content = (
    <main className={styles.main}>
      
      <hr/>
      
      <div className={styles.about_me_cont}>
        <div className={styles.section_title}>About Me</div>
        <div className={styles.about_me}>
          <p>Hello! I'm <span className={styles.text_em}>Chad Jones</span>. With nearly <span className={styles.text_em}>12 years of experience as a hobbyist programmer</span>, I discovered a passion for data analytics through my studies. Since entering the workforce at age 14, I have utilized spreadsheets to manage finances and organize personal projects. Now, after completing <a className={styles.projects_link} href="/projects">multiple portfolio projects</a> and the <span className={styles.text_em}>Google DA Certificate</span>, I&#39;m equipped with professional knowledge and eager to transition into the field as a Data Analyst.</p>
        </div>
      </div>

      <hr/>

      <div className={styles.skills_cont}>
        <div className={styles.tech_skills_cont}>
          <div className={styles.section_title}>Technical Skills</div>
          <ul className={styles.tech_skills_list}>
            <li>Spreadsheets (Excel / Google Sheets)</li>
            <li>SQL</li>
            <li>Python / R</li>
            <li>Markdown / RMarkdown</li>
            <li>Tableau</li>
            <li>Git / Github</li>
            <li>HTML / CSS / JavaScript</li>
          </ul>
        </div>

        <div className={styles.soft_skills_cont}>
        <div className={styles.section_title}>Soft Skills</div>
          <ul className={styles.soft_skills_list}>
            <li>Technical mindset driven to find automation and efficiency</li>
            <li>Passion for overcoming challenges, solving complex problems, and finding patterns</li>
            <li>Detail-oriented and organized</li>
            <li>Works well both independently and while collaborating with a team</li>
            <li>Excellent time management skills</li>
          </ul>
        </div>
      </div>

      <hr/>

      <div className={styles.experience_cont}>
        <div className={styles.section_title}>Experience</div>

        <div className={styles.waypoint_header_cont}>

          <div className={styles.waypoint_title_cont}>
            <div className={styles.waypoint_title}>Waypoint Analytical</div>
            <div className={styles.waypoint_location}>Atlantic, IA</div>
          </div>
          
          <div className={styles.waypoint_position_cont}>
            <div className={styles.waypoint_position}>Laboratory Technician</div>
            <div className={styles.waypoint_dates}>
              <p>Jul 2019 - Current</p>
              <p>May 2018 - Jan 2019</p>
            </div>
          </div>
        </div>

        <div className={styles.waypoint_desc_cont}>
          <p>Agricultural lab position at a company which hit new record high numbers 3 years in a row.</p>
        </div>
      </div>
    </main>
  )
  
  return content;
}
