"use client"
import { useEffect, useRef } from "react";

export default function TableauEmbed({ href, title, width, height }: Readonly<{ href: string, title: string, width: string, height: string }>) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
            script.async = true;
            ref.current.appendChild(script);
        }
    }, []);
    
    const content = (
        <div ref={ref}>
            <iframe
                src={`${href}&:embed=yes&:showVizHome=no&:tabs=no`}
                title={title}
                width= {width}
                height={height}
                style={{ border: "none" }}
            />
        </div>
    )

    return content;
}