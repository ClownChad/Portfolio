import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const content = (
    <main className={styles.main}>
      
      <hr/>
      
      <div className={`${styles.about_me_cont} section`}>
        <h1 className={"section_title"}>About Me</h1>
        <div className={styles.about_me}>
          <p>Hello! I&#39;m <span className={"text_em"}>Chad Jones</span>. With nearly <span className={"text_em"}>12 years of experience as a hobbyist programmer</span>, I discovered a passion for data analytics through my studies. Since entering the workforce at age 14, I have utilized spreadsheets to manage finances and organize personal projects. Now, after completing <a className={"text_em_link"} href="/projects">multiple portfolio projects</a> and the <span className={"text_em"}>Google DA Certificate</span>, I&#39;m equipped with professional knowledge and eager to transition into the field as a Data Analyst.</p>
        </div>
      </div>

      <hr/>

      <div className={`${styles.skills_cont} section`}>
        <div className={styles.tech_skills_cont}>
          <h1 className={"section_title"}>Technical Skills</h1>
          <ul className={styles.tech_skills_list}>
            <li>Spreadsheets (Excel / Google Sheets)</li>
            <li>SQL / SQLite</li>
            <li>Python / R</li>
            <li>Markdown / RMarkdown</li>
            <li>Tableau</li>
            <li>Visual Studio Code</li>
            <li>Git / Github</li>
            <li>HTML / CSS / JavaScript</li>
          </ul>
        </div>

        <div className={styles.soft_skills_cont}>
        <h1 className={"section_title"}>Soft Skills</h1>
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

      <div className={`${styles.experience_cont} section`}>
        <h1 className={"section_title"}>Experience</h1>

        <div className={styles.job_header_cont}>

          <div className={styles.job_title_cont}>
            <h2 className={styles.job_title}>Waypoint Analytical</h2>
            <div className={styles.job_location}>Atlantic, IA</div>
          </div>
          
          <div className={styles.job_position_cont}>
            <div className={styles.job_position}>Laboratory Technician</div>
            <div className={styles.job_dates}>
              <p>Jul 2019 - Current</p>
              <p>May 2018 - Jan 2019</p>
            </div>
          </div>
        </div>

        <div className={styles.job_desc_cont}>
          <p className={styles.job_overview}>Agricultural lab position at a company which hit new record high numbers 3 years in a row.</p>

          <p className={styles.waypoint_season}>Plant Analysis (Seasonal)</p>
          <ul className={styles.job_desc_list}>
            <li>Responsible for maintenance and operation of 5 combustion analysis (LECO) machines.</li>
            <li>Accurately weighed and prepped up to 2,500 plant samples daily.</li>
            <li>Lead team of 2 assistants and collaborated with night shift to ensure smooth and timely 24-hour workflow.</li>
          </ul>

          <p className={styles.waypoint_season}>Soil Analysis (Seasonal)</p>
          <ul className={styles.job_desc_list}>
            <li>Effectively collaborated with 12+ person receiving team to organize and prep up to 13,000 samples daily for overnight testing.</li>
            <li>Prepped and independently analyzed Bray II Phosphorus tests on ICP spectrometer.</li>
          </ul>
        </div>

        <div className={styles.job_header_cont}>

          <div className={styles.job_title_cont}>
            <h2 className={styles.job_title}>MV Transportation</h2>
            <div className={styles.job_location}>Elk Horn, IA</div>
          </div>
          
          <div className={styles.job_position_cont}>
            <div className={styles.job_position}>Qualifications Assistant</div>
            <div className={styles.job_dates}>
              <p>Feb 2019 - Apr 2019</p>
              <p>Feb 2017 - Feb 2018</p>
            </div>
          </div>
        </div>

        <div className={styles.job_desc_cont}>
          <p className={styles.job_overview}>Data entry position at company which hired 100s of nationwide applicants daily for third-party transportation services.</p>

          <ul className={styles.job_desc_list}>
            <li>Independently responsible for the most divisions out of the QAs by qualifying 20 to 50 nationwide prospective candidates daily through a detail-oriented onboarding procedure.</li>
            <li>Used written and oral communication to expediately expeditiously obtain missing or invalid information. </li>
            <li>Assisted in the maintenance of 2 spreadsheets of 1,000s of employees for pending info and needed DMV / medical information</li>
          </ul>
        </div>
      </div>

      <hr/>

      <div className={`${styles.certs_cont} section`}>
        <h1 className={"section_title"}>Certifications</h1>

        <h2 className={`${styles.cert_title} ${"text_em_link"}`}>
          <Link 
            href="https://coursera.org/verify/professional-cert/V14UY7PYG6LI" 
            target="_blank"
          >
            Google Data Analytics Certificate
          </Link>
        </h2>
        <p className={styles.cert_date}>March 2025</p>
      </div>
    </main>
  )
  
  return content;
}
