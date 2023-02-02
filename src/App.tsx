import React, { MouseEvent, useState, useEffect } from "react";
import "./App.css";
import { gsap } from "gsap";
import TopNav from "./Components/TopNav/TopNav";
import Title1 from "./Components/Title1/Title1";
import Led from "./Components/Led/Led";
import Cursor from "./Components/Cursor/Cursor";
import Title2 from "./Components/Title2/Title2";
import Stacks from "./Components/Stacks/Stacks";
import Title3 from "./Components/Title3/Title3";
import Preview1 from "./Components/Preview/Preview";
import Projects from "./Projects/Projects";

type mousePosition = {
   x: number | null;
   y: number | null;
};

type scrollPosition = {
   scrollY: number | null;
};

function App() {
   const [mousePosition, setMousePosition] = useState<mousePosition>({
      x: null,
      y: null,
   });
   const [scrollY, setScrollY] = useState<scrollPosition>({ scrollY: null });
   const [currentStack, setCurrentStack] = useState<string>("");

   useEffect(() => {
      const onScroll = () => {
         setScrollY({ scrollY: window.scrollY });
      };
      window.addEventListener("scroll", onScroll);
      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, []);
   useEffect(() => {
      // 900, 1050, 1200
      if (typeof scrollY.scrollY === "number") {
         if (scrollY.scrollY < 900) {
            gsap.to("#StackLine1", {
               opacity: 0,
               duration: 1,
               y: 40,
            });
         } else if (scrollY.scrollY >= 900 && scrollY.scrollY < 1050) {
            gsap.to("#StackLine1", {
               opacity: 1,
               duration: 1,
               y: -40,
            });
            gsap.to("#StackLine2", {
               opacity: 0,
               duration: 1,
               y: 40,
            });
         } else if (scrollY.scrollY >= 1050 && scrollY.scrollY < 1200) {
            gsap.to("#StackLine2", {
               opacity: 1,
               duration: 1,
               y: -40,
            });
            gsap.to("#StackLine3", {
               opacity: 0,
               duration: 1,
               y: 40,
            });
         } else if (scrollY.scrollY >= 1200) {
            gsap.to("#StackLine3", {
               opacity: 1,
               duration: 1,
               y: -40,
            });
         }
      }
   }, [scrollY]);
   const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
   };

   const onMouseEnter = (e: MouseEvent) => {
      gsap.to("#cursor", { width: "150px", height: "150px", duration: 0.1 });
   };
   const onMouseLeave = (e: MouseEvent) => {
      gsap.to("#cursor", { width: "0px", height: "0px", duration: 0.1 });
   };
   // console.log(currentStack);
   return (
      <div onMouseMove={mouseMoveHandler} className="App">
         <Cursor currentStack={currentStack} mousePosition={mousePosition} />
         <TopNav />
         <Title1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
         <Led />
         <Title2
            scrollY={scrollY.scrollY}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         />
         <Stacks setCurrentStack={setCurrentStack} />
         <Title3
            scrollY={scrollY.scrollY}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         />
         <Preview1
            scrollY={scrollY.scrollY}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         />
         <Projects />
      </div>
   );
}

export default App;
