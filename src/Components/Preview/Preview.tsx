import React, { MouseEvent, useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./Preview.module.css";
import Slider_home from "../../ChilLin/Slider";

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
   const videoRef = useRef<HTMLVideoElement>(null);
   const videoWrapperRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (videoRef.current) {
         gsap.registerPlugin(ScrollTrigger);
         ScrollTrigger.create({
            trigger: videoWrapperRef.current,
            scrub: true,
            pin: videoWrapperRef.current,
            start: "center center",
            end: "+=20000",
            markers: false,
            onUpdate: function (self) {
               if (videoRef.current) {
                  var scrollPos = self.progress;
                  var videoDuration = videoRef.current.duration;
                  var videoCurrentTime = videoDuration * scrollPos;

                  if (videoCurrentTime) {
                     videoRef.current.currentTime = videoCurrentTime;
                  }
               }
            },
         });
      }
   }, [videoRef]);
   useEffect(() => {
      if (scrollY) {
         if (scrollY < 2100) {
            gsap.to("#previewContainer1", { opacity: 0, duration: 1 });
         } else if (scrollY >= 2100 && scrollY < 2300) {
            gsap.to("#previewContainer1", { opacity: 1, duration: 1 });
         } else if (scrollY >= 22000 && scrollY < 23200) {
            gsap.to("#previewContainer2", { opacity: 0, duration: 1 });
         } else if (scrollY >= 23200) {
            gsap.to("#previewContainer2", { opacity: 1, duration: 1 });
         }
      }
   }, [scrollY]);
   useEffect(() => {
      if (scrollY) {
         if (scrollY >= 24200) {
            gsap.to("#more", {
               opacity: 1,
               zIndex: 1,
               duration: 0,
               position: "absolute",
               top: "800px",
            });
            gsap.to("#ProjectContainer", {
               opacity: 1,
               y: -40,
               duration: 0.5,
            });
         } else if (23980 <= scrollY && scrollY < 24200) {
            gsap.to("#more", {
               opacity: 1,
               zIndex: 1,
               duration: 0,
               position: "fixed",
               top: "500px",
            });
         } else if (scrollY < 23975) {
            gsap.to("#more", {
               opacity: 0,
               zIndex: -1,
               duration: 0,
            });
            gsap.to("#ProjectContainer", {
               opacity: 0,
               y: 40,
               duration: 0.5,
            });
         }
      }
   }, [scrollY]);
   console.log(scrollY);
   return (
      <div className={styles.PreviewContaienr}>
         <div id="previewContainer1" className={styles.Preview1Container}>
            <div
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
               className={styles.previewTitleWrapper}>
               <h1 className={styles.previewTitle}>Plug</h1>
            </div>
            <div
               ref={videoWrapperRef}
               id="videoWrapper"
               className={styles.previewBodyWrapper}>
               <video
                  ref={videoRef}
                  className={styles.video}
                  src={require("../../previewVideo/PlugPreview.mov")}></video>
            </div>
         </div>
         <div id="previewContainer2" className={styles.Preview2Container}>
            <div
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
               className={styles.previewTitleWrapper}>
               <h1 className={styles.previewTitle}>ChilLin</h1>
            </div>
            <div className={styles.previewBodyWrapper}>
               <Slider_home />
               <div id="more" className={styles.More}>
                  <h1>That Projects</h1>
               </div>
            </div>
         </div>
      </div>
   );
}
