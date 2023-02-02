import React from "react";
import styles from "./Projects.module.css";
import Card from "./Card";

export default function Projects() {
   return (
      <div id="ProjectContainer" className={styles.ProjectsContainer}>
         <Card
            title="ChilLin / Front End Developer"
            body="블라블라 어쩍ㄹ구 저쩌구"
            github="https://github.com/daeseopk/ChilLin"
            service="wait"
         />
         <Card
            title="Plug / Full Stack Developer"
            body="으라린ㅁㄹㅇ니무ㅏㄹㄴ어러러럴"
            github="https://github.com/daeseopk/Plug-Front"
            service="wait"
         />
      </div>
   );
}
