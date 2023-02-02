import React from "react";
import styles from "./Projects.module.css";
import styled from "styled-components";

interface CardProp {
   title: string;
   body: string;
   github: string;
   service: string;
}
const Line = styled.div`
   width: 100%;
   height: 1px;
   background-color: rgb(113, 113, 122);
   margin-top: 20px;
   margin-bottom: 20px;
`;
export default function Card({ title, body, github, service }: CardProp) {
   return (
      <div className={styles.CardWrapper}>
         <h1>{title}</h1>
         <Line />
         <p className={styles.cardMainText}>{body}</p>
         <div className={styles.CardButtonContainer}>
            <div
               onClick={() => {
                  window.open(github);
               }}
               className={styles.ButtonWrapper}>
               <img
                  className={styles.icon}
                  src={require("../Icons/github_icon.png")}
                  alt="github"
               />
               <p>Github</p>
            </div>
            <div className={styles.ButtonWrapper}>
               <img
                  className={styles.icon}
                  src={require("../Icons/service_icon.png")}
                  alt="service"
               />
               <p>Demo</p>
            </div>
         </div>
      </div>
   );
}
