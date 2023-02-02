import { React, useState } from "react";
import styles from "./LoginModal.module.css";
import styled from "styled-components";
import SocialLogin from "./SocialLogin/SocialLogin";

const CONCEPT_COLOR = "#6abce2";
const ModalBackGround = styled.div`
   transition: 0.3s ease all;
   position: absolute;
   display: flex;
   align-item: center;
   justify-content: center;
   top: -150px;
   left: 0;
   bottom: 0;
   right: 0;
   background: ${(prop) => prop.background};
   z-index: ${(prop) => prop.z_index};
`;
const LoginContainer = styled.div`
   position: absolute;
   top: 50%;
   transform: translate(0, -50%);
   width: 450px;
   height: 600px;
   transition: 0.3s ease all;
   border-radius: 39px;
   opacity: ${(prop) => prop.opacity};
   z-index:${(prop) => prop.z_index}
   color: #6ABCE2;
   background-color: #f0f0f3;
   box-shadow: 7px 7px 15px 7px rgba(16, 16, 16, 0.2);
`;
const LoginBtn = styled.div`
   margin-top: 20px;
   display: flex;
   width: 100%;
   height: 55px;
   color: white;
   background-color: ${(prop) => prop.backgroundColor};
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   font-size: 20px;
   font-weight: 900;
   transition: 0.3s all ease;
   cursor: pointer;
`;

export default function LoginModal() {
   const [LoginBtnColor, setLoginBtnColor] = useState(CONCEPT_COLOR);
   const [isChecked, setIsChecked] = useState(false); // 아이디 저장

   return (
      // ModalBackGround
      // LoginContainer
      // visibility.isVisible(Redux) 값이 true 면 Modal창 보이기 및 배경 색 어둡게 default : false
      <ModalBackGround z_index={"99"} background={"none"}>
         <LoginContainer opacity={"1"}>
            <img
               src={require("./Profile.png")}
               className={styles.Icon}
               alt="Profile"
            />
            <img
               src={require("./closeBtn.png")}
               alt="closeBtn"
               className={styles.CloseBtn}
            />

            <div className={styles.Login_BodyContainer}>
               <p>아이디</p>
               <input
                  value="회원가입을 클릭해 주세요!"
                  readOnly={true}
                  className={styles.Login_Input}
                  type="id"
                  name="id"
               />
               <p>패스워드</p>
               <input
                  value="Read Only!"
                  readOnly={true}
                  className={styles.Login_Input}
                  type="password"
                  name="password"
               />
               <div className={styles.ThinBlockWrapper}>
                  <input
                     checked={isChecked}
                     onChange={() => setIsChecked(!isChecked)}
                     style={{
                        position: "relative",
                        border: "solid 1.5px #6abce2",
                        backgroundColor: "#f0f0f3",
                        cursor: "pointer",
                     }}
                     type="checkbox"
                  />
                  <span
                     onClick={() => setIsChecked(!isChecked)}
                     style={{
                        position: "relative",
                        color: "#6abce2",
                        fontWeight: "900",
                        fontSize: "13px",
                        cursor: "pointer",
                     }}>
                     아이디 저장
                  </span>
               </div>
               <LoginBtn
                  onMouseEnter={() => setLoginBtnColor("#5496b4")}
                  onMouseLeave={() => setLoginBtnColor(CONCEPT_COLOR)}
                  onMouseDown={() => setLoginBtnColor("#3f7087")}
                  onMouseUp={() => setLoginBtnColor("#5496b4")}
                  backgroundColor={LoginBtnColor}>
                  로그인
               </LoginBtn>
               <div className={styles.SignUpWrapper}>
                  <p>Plug가 처음이신가요?</p>
                  <div
                     className={styles.SignupButton}
                     onClick={() =>
                        window.open("http://3.34.95.208:3000/SignUp")
                     }>
                     <p style={{ fontWeight: "900", marginLeft: "5px" }}>
                        회원 가입
                     </p>
                  </div>
               </div>
               <SocialLogin />
            </div>
         </LoginContainer>
      </ModalBackGround>
   );
}
