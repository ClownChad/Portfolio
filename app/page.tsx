import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const content = (
    <main className={styles.main}>
      
      <hr/>
      
      <div className={`${styles.about_me_cont} section`}>
        <h1 className={"section_title"}>About Me</h1>
        <div className={styles.about_me}>
          <p>Hello! I&#39;m <span className={"text_em"}>Chad Jones</span>. With nearly <span className={"text_em"}>12 years of experience as a hobbyist programmer</span>, I discovered a passion for data analytics through my studies. Since entering the workforce at age 14, I have utilized spreadsheets to manage finances and organize personal projects. Now, after completing <Link className={"text_em_link"} href="/projects">multiple portfolio projects</Link> and the <Link className={"text_em_link"} href={"https://coursera.org/verify/professional-cert/V14UY7PYG6LI"} target="_blank">Google DA Certificate</Link>, I&#39;m equipped with professional knowledge and eager to transition into the field as a Data Analyst.</p>
        </div>
      </div>

      <hr/>

      <div className={`${styles.skills_summary_cont} section`}>
        <h1 className={"section_title"}>Skills Summary</h1>

        <div className={styles.skills_cont}>
          <h2 className={styles.skills_title}>Tools</h2>
          <ul className={styles.skills_list}>
            <li>Excel / Google Sheets</li>
            <li>Tableau</li>
            <li>MySQL Workbench</li>
            <li>DB Browser</li>
            <li>Git</li>
          </ul>

          <h2 className={styles.skills_title}>Languages</h2>
          <ul className={styles.skills_list}>
            <li>Python / R</li>
            <li>SQL / SQLite</li>
            <li>HTML / CSS / JavaScript</li>
            <li>NextJS</li>
          </ul>

          <h2 className={styles.skills_title}>Libraries</h2>
          <ul className={styles.skills_list}>
            <li>pandas (Python)</li>
            <li>numpy (Python)</li>
            <li>matplotlib (Python)</li>
            <li>tidyverse (R)</li>
          </ul>

          <h2 className={styles.skills_title}>Platforms</h2>
          <ul className={styles.skills_list}>
            <li>Visual Studio Code</li>
            <li>Jupyter Notebook</li>
            <li>BigQuery</li>
            <li>GitHub</li>
          </ul>

          <h2 className={styles.skills_title}>Soft Skills</h2>
          <ul className={styles.skills_list}>
            <li>Problem-Solving</li>
            <li>Analytical Thinking</li>
            <li>Excellent Time Management</li>
            <li>Detail-Oriented</li>
            <li>Strong ability to work independently and with teams</li>
          </ul>
        </div>
      </div>

      <hr/>

      <div className={`${styles.edu_cont} section`}>
        <h1 className={"section_title"}>Education</h1>

        <h2 className={`${styles.edu_title} ${"text_em_link"}`}>
          <Link 
            href="https://coursera.org/verify/professional-cert/V14UY7PYG6LI" 
            target="_blank"
          >
            Google Data Analytics Certificate
          </Link>
        </h2>
      </div>

      <hr/>

      <div className={`${styles.experience_cont} section`}>
        <h1 className={"section_title"}>Work Experience</h1>

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

          <ul className={styles.job_desc_list}>
            <li>Collaborated with cross-functional teams to maintain and operate 5 combustion analysis machines, ensuring high data accuracy in record-setting performance over 3 consecutive years.</li>
            <li>Led a team of 2 assistants to accurately weigh and prep up to 2,500 plant samples daily, demonstrating strong analytical abilities and meticulous attention to detail.</li>
            <li>Coordinated with a 12+ member receiving team to organize and prepare up to 13,000 soil samples daily, supporting data integrity and streamlined workflow processes.</li>
            <li>Using LMS, prepped and independently analyzed Bray II Phosphorus tests using ICP spectrometers, applying data analysis techniques to derive actionable insights. </li>
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
            <li>Managed detailed data entry and onboarding procedures for 20 to 50 nationwide prospective candidates daily, ensuring accurate collection and processing of critical employment data.</li>
            <li>Utilized effective written and verbal communication to resolve discrepancies in candidate information, supporting data quality and timely decision-making.</li>
            <li>Maintained and updated large spreadsheets of thousands of employees&#39; records tracking pending DMV and medical information. </li>
          </ul>
        </div>
      </div>
    </main>
  )
  
  return content;
}
