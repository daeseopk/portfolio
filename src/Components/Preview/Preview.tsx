import React, { MouseEvent, useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./Preview.module.css";
import Slider_home from "../../ChilLin/Slider";
import LoginModal from "../../Plug/LoginModal";

interface PreviewProp {
   onMouseEnter: (e: MouseEvent) => void;
   onMouseLeave: (e: MouseEvent) => void;
   scrollY: number | null;
}
export default function Preview1({
   onMouseEnter,
   onMouseLeave,
   scrollY,
}: PreviewProp) {
   useEffect(() => {
      if (scrollY) {
         if (scrollY < 2100) {
            gsap.to("#previewContainer1", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 2100 && scrollY < 2300) {
            gsap.to("#previewContainer1", { opacity: 1, duration: 1, y: -40 });
         }
         if (scrollY < 3000) {
            gsap.to("#previewContainer2", { opacity: 0, duration: 1, y: 40 });
         } else if (scrollY >= 3000 && scrollY < 3200) {
            gsap.to("#previewContainer2", { opacity: 1, duration: 1, y: -40 });
         } else if (scrollY < 4000) {
            gsap.to("#more", { opacity: 0, duration: 0 });
         } else if (scrollY >= 4000) {
            gsap.to("#more", { opacity: 1, duration: 0 });
         }
      }
   }, [scrollY]);
   useEffect(() => {
      if (scrollY) {
         if (scrollY >= 4320) {
            gsap.to("#ProjectContainer", { opacity: 1, duration: 0.5, y: -40 });
         } else if (scrollY < 4000) {
            gsap.to("#ProjectContainer", { opacity: 0, duration: 0.5, y: 40 });
         }
      }
   }, [scrollY]);
   return (
      <div className={styles.PreviewContaienr}>
         <div id="previewContainer1" className={styles.Preview2Container}>
            <div
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
               className={styles.previewTitleWrapper}>
               <h1 className={styles.previewTitle}>ChilLin</h1>
            </div>
            <div className={styles.previewBodyWrapper}>
               <Slider_home />
            </div>
         </div>
         <div id="previewContainer2" className={styles.Preview1Container}>
            <div
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
               className={styles.previewTitleWrapper}>
               <h1 className={styles.previewTitle}>Plug</h1>
            </div>
            <div id="more" className={styles.More}>
               <h1>That Projects</h1>
            </div>
            <div className={styles.previewBodyWrapper}>
               <LoginModal />
            </div>
         </div>
      </div>
   );
}
