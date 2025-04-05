import styles from "./page.module.css"
import SideBar from "@/components/SideBar"
import Link from "next/link"
import TableauEmbed from "@/components/TableauEmbed"
import KaggleEmbed from "@/components/KaggleEmbed"

export default function ProjectsPage(){
    const content = (
        <div className={styles.page_cont}>
            {/* <SideBar /> */}

            <main className={styles.main}>
                <hr/>
                
                <div className={`${styles.proj_cont} section`}>
                    <h1 className={"section_title"}>Dividend Champion Gap Theory</h1>
                    
                    <p className={styles.proj_overview}>Used R to scrape dividend stock data from Yahoo Finance to test if stock prices consistently increased around dividend announcements. Then, created data viz using Tableau.</p>

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
                            View Data Viz on Tableau
                        </Link>
                    </div>

                    <div className={styles.proj_link}>
                        <Link
                            className={"text_em_link"}
                            href="https://github.com/ClownChad/Dividend_Champion_Gap_Theory"
                            target="_blank"
                        >
                            View Source Files on GitHub
                        </Link>
                    </div>

                    {/* <TableauEmbed 
                        href="https://public.tableau.com/views/DividendChampionGapTheory/DividendChampionGapTheory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                        title="Dividend Champion Gap Theory"
                        width="1250"
                        height="850"
                    /> */}
                </div>
                
                <hr/>

                <div className={`${styles.proj_cont} section`}>
                    <h1 className={"section_title"}>Cafe Sales Analysis</h1>

                    <p className={styles.proj_overview}>Cleaned, prepared, and analyzed mock cafe business&#39;s sales data to identify sales trends and patterns. Completed using spreadsheets then converted project to a Python Jupyter Notebook.</p>

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
                            View Jupyter Notebook on Kaggle
                        </Link>
                    </div>

                    <div className={styles.proj_link}>
                        <Link
                            className={"text_em_link"}
                            href="https://github.com/ClownChad/Google-DA-Certificate-Assignments/tree/main/2025.02.03%20Cafe%20Sales%20Data%20Cleaning%20and%20Analysis"
                            target="_blank"
                        >
                            View Source Files on GitHub
                        </Link>
                    </div>

                    {/* <KaggleEmbed
                        href = "https://www.kaggle.com/embed/clownchad/cafe-sales-junior-data-analysis?kernelSessionId=222427274"
                        title = "Cafe Sales Analysis"
                        width="100%"
                        height="850px"
                    /> */}
                </div>

                <hr/>

                <div className={`${styles.proj_cont} section`}>
                    <h1 className={"section_title"}>Apple Stock Exploratory Analysis</h1>

                    <p className={styles.proj_overview}>Used Google Sheets to create pivot tables and summary tables of Apple Stock data. Created candlestick graphs within the sheets. Then, converted project to a Python Jupyter Notebook.</p>

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
                            View Jupyter Notebook on Kaggle
                        </Link>
                    </div>

                    <div className={styles.proj_link}>
                        <Link
                            className={"text_em_link"}
                            href="https://github.com/ClownChad/Google-DA-Certificate-Assignments/tree/main/2025.01.16%20Apple%20Stock%20Analysis"
                            target="_blank"
                        >
                            View Source Files on GitHub
                        </Link>
                    </div>

                    {/* <KaggleEmbed
                        href = "https://www.kaggle.com/embed/clownchad/apple-stock-junior-exploratory-analysis?kernelSessionId=219824280"
                        title = "Apple Stock Exploratory Analysis"
                        width="100%"
                        height="850px"
                    /> */}
                </div>
            </main>
        </div>
    )

    return content;
}