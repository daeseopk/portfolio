import React from "react";
import styles from "./Projects.module.css";
import Card from "./Card";

export default function Projects() {
   return (
      <div id="ProjectContainer" className={styles.ProjectsContainer}>
         <Card
            title="Portfolio / Front End Developer"
            body={["React", "Typescript", "GSAP", "StyledComponent"]}
            github="https://github.com/daeseopk/portfolio"
            service="https://daeseopk.github.io/portfolio/"
         />
         <Card
            title="ChilLin / Front End Developer"
            body={["React", "Javascript", "StyledComponent", "firebase"]}
            github="https://github.com/daeseopk/ChilLin"
            service="https://movieweb-2b841.firebaseapp.com/Home"
         />
         <Card
            title="Plug / Full Stack Developer"
            body={[
               "React",
               "Javascript",
               "StyledComponent",
               "Express",
               "Node",
               "Redux",
               "MongoDB",
               "Socketio",
               "AWS",
            ]}
            github="https://github.com/daeseopk/Plug-Front"
            service="http://3.34.95.208:3000"
         />
      </div>
   );
}
