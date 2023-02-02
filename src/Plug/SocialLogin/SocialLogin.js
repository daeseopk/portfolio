import { React, useRef } from "react";
import styles from "./SocialLogin.module.css";

export default function SocialLogin({ setisOpenSnack }) {
   const Logo = useRef([]);
   const Icon = useRef([]);
   const NaverBtn = useRef();
   const GoogleIcon = require("./google.png");
   const KakaoIcon = require("./kakao.png");
   const NaverIcon = require("./naver.png");
   const Icons = [GoogleIcon, KakaoIcon, NaverIcon];

   const onMouseEnter_icon = (e) => {
      if (parseInt(e.target.id) === 0) {
         // 구글
         Logo.current[e.target.id].style = "filter:none";
         Icon.current[e.target.id].style =
            "outline: 2px solid rgba(255,0,0,0.2);";
      } else if (parseInt(e.target.id) === 1) {
         // 카카오
         Logo.current[e.target.id].style = "filter:none";
         Icon.current[e.target.id].style =
            "outline: 2px solid #FFF596; background-color:#FEE500";
      } else {
         // 네이버
         Logo.current[e.target.id].style =
            "filter: invert(70%) sepia(94%) saturate(391%) hue-rotate(73deg) brightness(100%) contrast(105%);";
         Icon.current[e.target.id].style =
            "outline: 2px solid rgba(51, 255, 104,0.3);";
      }
   };
   const onMouseLeave_icon = (e) => {
      Logo.current[e.target.id].style =
         "filter: invert(75%) sepia(30%) saturate(2%) hue-rotate(102deg) brightness(94%) contrast(92%);";
      Icon.current[e.target.id].style = "outline: 2px solid #FFF;";
   };

   // 소셜 로그인 시도 시 액세스토큰 받는 방식이 동일하기 때문에 세션스토리지로 분기
   return (
      <div className={styles.SocialLoginWrapper}>
         <div
            ref={NaverBtn}
            style={{ display: "none" }}
            id="naverIdLogin"></div>
         {Icons.map((icon, index) => (
            <div
               key={index}
               ref={(elem) => (Icon.current[index] = elem)}
               className={styles.Icon}
               onMouseLeave={onMouseLeave_icon}
               onMouseEnter={onMouseEnter_icon}
               id={index}
               backgroundcolor="white">
               <img
                  alt="SocialIcon"
                  id={index}
                  ref={(elem) => (Logo.current[index] = elem)}
                  className={styles.Logo}
                  width="25px"
                  height="25px"
                  src={icon}
               />
            </div>
         ))}
      </div>
   );
}
