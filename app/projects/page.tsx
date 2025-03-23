import styles from "./page.module.css"
import SideBar from "@/components/SideBar"
import Link from "next/link"
import TableauEmbed from "@/components/TableauEmbed"

export default function ProjectsPage(){
    const content = (
        <div className={styles.page_cont}>
            {/* <SideBar /> */}

            <main className={styles.main}>
                <hr/>
                
                <div className={`${styles.proj_cont} section`}>
                    <h1 className={"section_title"}>Dividend Champion Gap Theory</h1>
                    
                    <div className={styles.tools_cont}>
                        <h2 className={styles.tools_header}>Tools Used</h2>
                        <ul className={styles.tools_list}>
                            <li><span className={"text_em"}>R with RStudio</span> - Used for initial scrape of stock data</li>
                            <li><span className={"text_em"}>SQLite with DB Browser</span> - Used to locally create a database and perform SQL commands</li>
                            <li><span className={"text_em"}>Tableau</span> - Used for data vizualizations</li>
                        </ul>
                    </div>

                    <div className={styles.proj_link}>
                        <Link
                            className={"text_em_link"}
                            href="https://public.tableau.com/app/profile/chad.j8196/viz/DividendChampionGapTheory/DividendChampionGapTheory"
                            target="_blank"
                        >
                            View "Dividend Champion Gap Theory" on Tableau
                        </Link>
                    </div>

                    <TableauEmbed 
                        href="https://public.tableau.com/views/DividendChampionGapTheory/DividendChampionGapTheory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                        width="1250"
                        height="850"
                    />
                </div>
                
                <hr/>

                <div className={`${styles.proj_cont} section`}>
                    <h1 className={"section_title"}>Cafe Sales Analysis</h1>

                    <div className={styles.tools_cont}>
                        <h2 className={styles.tools_header}>Tools Used</h2>
                        <ul className={styles.tools_list}>
                            <li><span className={"text_em"}>Google Sheets</span> - Used for cleaning / preparing / analyzing / visualizing data</li>
                            <li><span className={"text_em"}>Python with Kaggle Jupyter Notebook</span> - Used to repeat Google Sheets process through code </li>
                            <li><span className={"text_em"}>MatPlotLib</span> - Used for data vizualizations within Kaggle</li>
                        </ul>
                    </div>

                    <div className={styles.proj_link}>
                        <Link
                            className={"text_em_link"}
                            href="https://www.kaggle.com/code/clownchad/cafe-sales-junior-data-analysis"
                            target="_blank"
                        >
                            View "Cafe Sales Analysis" on Kaggle
                        </Link>
                    </div>

                    <iframe 
                        className={styles.kaggle_embed}
                        src="https://www.kaggle.com/embed/clownchad/cafe-sales-junior-data-analysis?kernelSessionId=222427274" 
                        title="Cafe Sales Analysis"
                    />
                </div>

                <hr/>

                <div className={`${styles.proj_cont} section`}>
                    <h1 className={"section_title"}>Apple Stock Exploratory Analysis</h1>

                    <div className={styles.tools_cont}>
                        <h2 className={styles.tools_header}>Tools Used</h2>
                        <ul className={styles.tools_list}>
                            <li><span className={"text_em"}>Google Sheets</span> - Used for cleaning / preparing / analyzing / visualizing data</li>
                            <li><span className={"text_em"}>Python with Kaggle Jupyter Notebook</span> - Used to repeat Google Sheets process through code </li>
                            <li><span className={"text_em"}>MatPlotLib</span> - Used for data vizualizations within Kaggle</li>
                        </ul>
                    </div>

                    <div className={styles.proj_link}>
                        <Link
                            className={"text_em_link"}
                            href="https://www.kaggle.com/code/clownchad/apple-stock-junior-exploratory-analysis"
                            target="_blank"
                        >
                            View "Apple Stock Exploratory Analysis" on Kaggle
                        </Link>
                    </div>

                    <iframe 
                        className={styles.kaggle_embed}
                        src="https://www.kaggle.com/embed/clownchad/apple-stock-junior-exploratory-analysis?kernelSessionId=219824280" 
                        title="Apple Stock Exploratory Analysis"
                    />
                </div>
            </main>
        </div>
    )

    return content;
}