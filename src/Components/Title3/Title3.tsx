import React, { MouseEvent, useEffect } from "react";
import gsap from "gsap";
import styles from "./Title3.module.css";
interface Title3Prop {
   onMouseEnter: (e: MouseEvent) => void;
   onMouseLeave: (e: MouseEvent) => void;
   scrollY: number | null;
}
export default function Title3({
   onMouseEnter,
   onMouseLeave,
   scrollY,
}: Title3Prop) {
   useEffect(() => {
      if (scrollY) {
         if (scrollY < 1300) {
            gsap.to("#titleWord1", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1300 && scrollY < 1350) {
            gsap.to("#titleWord1", { opacity: 1, duration: 1, y: -40 });
            gsap.to("#titleWord2", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1350 && scrollY < 1400) {
            gsap.to("#titleWord2", { opacity: 1, duration: 1, y: -40 });
            gsap.to("#titleWord3", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1400 && scrollY < 1450) {
            gsap.to("#titleWord3", { opacity: 1, duration: 1, y: -40 });
            gsap.to("#titleWord4", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1450 && scrollY < 1500) {
            gsap.to("#titleWord4", { opacity: 1, duration: 1, y: -40 });
            gsap.to("#titleWord5", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1500 && scrollY < 1550) {
            gsap.to("#titleWord5", { opacity: 1, duration: 1, y: -40 });
            gsap.to("#titleWord6", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1550 && scrollY < 1600) {
            gsap.to("#titleWord6", { opacity: 1, duration: 1, y: -40 });
            gsap.to("#titleWord7", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1600 && scrollY < 1650) {
            gsap.to("#titleWord7", { opacity: 1, duration: 1, y: -40 });
            gsap.to("#titleWord8", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 1650) {
            gsap.to("#titleWord8", { opacity: 1, duration: 1, y: -40 });
         }
      }
   }, [scrollY]);
   return (
      <div
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         className={styles.TitleContainer}>
         <div className={styles.TitleParagraphWrapper}>
            <h1 id="titleWord1">Using</h1>
            <h1 id="titleWord2">the</h1>
            <h1 id="titleWord3">latest</h1>
         </div>
         <div className={styles.TitleParagraphWrapper}>
            <h1 id="titleWord4">technologies,</h1>
            <h1 id="titleWord5">I</h1>
            <h1 id="titleWord6">develop</h1>
         </div>
         <div className={styles.TitleParagraphWrapper}>
            <h1 id="titleWord7">things</h1>
            <h1 id="titleWord8">like...</h1>
         </div>
      </div>
   );
}
