import React from "react";
import { gsap } from "gsap";
import styles from "./Stacks.module.css";

interface StackProp {
   setCurrentStack: React.Dispatch<React.SetStateAction<string>>;
}

export default function Stacks({ setCurrentStack }: StackProp) {
   const onMouseEnter_ = (event: any) => {
      gsap.to("#cursor", { width: "150px", height: "150px", duration: 0.1 });
      setCurrentStack(event.target.alt);
   };
   const onMouseLeave_ = () => {
      gsap.to("#cursor", { width: "0px", height: "0px", duration: 0.1 });
      setCurrentStack("");
   };
   return (
      <div className={styles.StacksContainer}>
         <div id="StackLine1" className={styles.StackLineWrapper1}>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.javascript}
                  className={styles.square}
                  src={require("../../Icons/javascript.png")}
                  alt="Javascript"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.typescript}
                  className={styles.square}
                  src={require("../../Icons/typescript.png")}
                  alt="Typescript"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.react}
                  className={styles.square}
                  src={require("../../Icons/react.png")}
                  alt="React"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.redux}
                  className={styles.square}
                  src={require("../../Icons/redux.png")}
                  alt="Redux"
               />
            </div>
         </div>
         <div id="StackLine2" className={styles.StackLineWrapper2}>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.express}
                  className={styles.rectangle}
                  src={require("../../Icons/express.png")}
                  alt="Express"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.nodejs}
                  className={styles.rectangle}
                  src={require("../../Icons/nodejs.png")}
                  alt="Nodejs"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.mongodb}
                  className={styles.rectangle}
                  src={require("../../Icons/mongodb.png")}
                  alt="MongoDB"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.socketio}
                  className={styles.square}
                  src={require("../../Icons/socketio.png")}
                  alt="Socketio"
               />
            </div>
         </div>
         <div id="StackLine3" className={styles.StackLineWrapper1}>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.git}
                  className={styles.square}
                  src={require("../../Icons/git.png")}
                  alt="Git"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.aws}
                  className={styles.square}
                  src={require("../../Icons/aws.png")}
                  alt="AWS"
               />
            </div>
            <div className={styles.IconWrapper}>
               <img
                  onMouseEnter={onMouseEnter_}
                  onMouseLeave={onMouseLeave_}
                  id={styles.python}
                  className={styles.square}
                  src={require("../../Icons/python.png")}
                  alt="Python"
               />
            </div>
         </div>
      </div>
   );
}
