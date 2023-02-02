import React, { useEffect, MouseEvent } from "react";
import { gsap } from "gsap";
import styles from "./Title1.module.css";

interface EventProp {
   onMouseEnter: (e: MouseEvent) => void;
   onMouseLeave: (e: MouseEvent) => void;
}

export default function Title1({ onMouseEnter, onMouseLeave }: EventProp) {
   useEffect(() => {
      setTimeout(() => {
         gsap.timeline().to("#ContainerTitle1 h1", {
            y: -40,
            stagger: 0.1,
            duration: 0.1,
            opacity: 1,
         });
      }, 500);
   }, []);

   return (
      <div
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         id="ContainerTitle1"
         className={styles.TitleContainer}>
         <div className={styles.TitleWrapper}>
            <h1>A</h1>
            <h1>passionate</h1>
            <h1>dev,</h1>
            <h1>making</h1>
         </div>
         <div className={styles.TitleWrapper}>
            <h1 id={styles.effect}>things</h1>
            <h1>the</h1>
            <h1>right</h1>
            <h1>way.</h1>
         </div>
      </div>
   );
}
