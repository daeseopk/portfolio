import React, { MouseEvent, useEffect } from "react";
import styles from "./Title2.module.css";
import { gsap } from "gsap";

interface Title2Prop {
   onMouseEnter: (e: MouseEvent) => void;
   onMouseLeave: (e: MouseEvent) => void;
   scrollY: number | null;
}

export default function Title2({
   onMouseEnter,
   onMouseLeave,
   scrollY,
}: Title2Prop) {
   useEffect(() => {
      if (scrollY) {
         var opaicty;
         if (scrollY >= 400 && scrollY < 500) {
            opaicty = scrollY * 0.0005;
         } else if (scrollY >= 500 && scrollY < 600) {
            opaicty = scrollY * 0.0017;
         }
         gsap.to("#ContainerTitle2", { opacity: opaicty, duration: 0.5 });
      }
   }, [scrollY]);
   return (
      <div
         id="ContainerTitle2"
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         className={styles.Title2Container}>
         <div className={styles.TitleParagraphWrapper}>
            <h1>I'm DaeSeop Kim,</h1>
         </div>
         <div className={styles.TitleParagraphWrapper}>
            <h1>a Front End</h1>
            <h1 id={styles.effect}>Developer</h1>
         </div>
         <div className={styles.TitleParagraphWrapper}>
            <h1>that creates interactive</h1>
         </div>
         <div className={styles.TitleParagraphWrapper}>
            <h1 id={styles.effect}>web</h1>
            <h1>applications</h1>
         </div>
      </div>
   );
}
