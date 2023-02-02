import React, { useEffect } from "react";
import styles from "./TopNav.module.css";
import styled from "styled-components";
import { gsap } from "gsap";

const TopNavWrapper = styled.div`
   position: absolute;
   display: flex;
   align-items: center;
   opacity: 0;
   justify-content: center;
   top: 0px;
   width: 100%;
   height: 30px;
   transition: 0.5s ease all;
`;

const Line = styled.div`
   width: 0%;
   height: 1px;
   background-color: rgb(82 82 91);
   z-index: 1;
   transition: 0.5s ease all;
`;

export default function TopNav() {
   useEffect(() => {
      setTimeout(() => {
         gsap
            .timeline()
            .to("#Wrapper", { duration: 0.1, y: 40 })
            .to("#Wrapper", { duration: 0.3, opacity: 1 })
            .to("#Line", { duration: 0.3, width: "100%" });
      }, 1000);
   }, []);
   const onClickButton = () => {
      window.scrollTo({ top: 2600, behavior: "smooth" });
   };
   return (
      <div className={styles.TopNavContainer}>
         <TopNavWrapper id="Wrapper">
            <Line id="Line" />
            <div id="NavWrapper" className={styles.TopNavButtonWrapper}>
               <span onClick={onClickButton} className={styles.TopNavButton}>
                  Projects
               </span>
               <span className={styles.TopNavButton}>Resume</span>
               <span className={styles.TopNavButton}>Contact</span>
            </div>
         </TopNavWrapper>
      </div>
   );
}
