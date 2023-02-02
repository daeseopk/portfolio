import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

interface style {
   width: number;
}

const LedContainer = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 900px;
   height: 45vh;
   top: 360px;
`;

const SingleLed = styled.div<style>`
   position: relative;
   margin-bottom: 55px;
   width: ${(prop) => prop.width}%;
   height: 3px;
   background-color: rgb(113 113 122);
   transition: 0.3s ease all;
   opacity: 0;
`;
export default function Led() {
   //    const [opacity, setOpacity] = useState<Number[]>([0, 0, 0, 0, 0, 0, 0]);
   useEffect(() => {
      setTimeout(() => {
         gsap.to("#LED div", {
            opacity: 1,
            stagger: 0.08,
            duration: 0.7,
            repeat: -1,
            repeatDelay: 0.7,
         });
         setTimeout(() => {
            gsap.to("#LED div", {
               opacity: 0,
               stagger: 0.08,
               duration: 0.7,
               repeat: -1,
               repeatDelay: 0.7,
            });
         }, 700);
      }, 1500);
   }, []);

   return (
      <LedContainer id="LED">
         <SingleLed width={100} />
         <SingleLed width={67} />
         <SingleLed width={51} />
         <SingleLed width={38} />
         <SingleLed width={30} />
         <SingleLed width={20} />
         <SingleLed width={10} />
         <SingleLed width={5} />
      </LedContainer>
   );
}
