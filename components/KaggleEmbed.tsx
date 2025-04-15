"use client"
import styles from "./KaggleEmbded.module.css"
import { useState, useEffect } from "react";

export default function KaggleEmbed({ href, title, width, height }: Readonly<{ href: string, title: string, width: string, height: string }>){
  const [loaded, setLoaded] = useState(false)

  const content = (
      <div className={styles.embed_cont}>
        {!loaded && (
          <div className={styles.loading}>
            Loading...
          </div>
        )}
        <iframe
            className={styles.kaggle_embed}
            src={href}
            title={title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            width={width}
            height={height}
            style={{ border: "none" }}
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
        />
      </div>
  )

  return content;
}