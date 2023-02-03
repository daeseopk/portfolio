import styled from "styled-components";

interface mousePosition {
   x: number | null;
   y: number | null;
}

interface mousePositionForStyledComponent {
   x: number | null;
   y: number | null;
   translateY: number;
   backgroundColor: string;
}
const Cursor = styled.div<mousePositionForStyledComponent>`
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 0px;
   height: 0px;
   left: ${(prop) => prop.x}px;
   top: ${(prop) => prop.y}px;
   transform: translate(-50%, ${(prop) => prop.translateY}%);
   border-radius: 150px;
   background-color: ${(prop) => prop.backgroundColor};
`;

interface mousePositionProp {
   mousePosition: mousePosition;
   currentStack: string;
   isHoverName: boolean;
}

const CursorComponent = ({
   mousePosition,
   currentStack,
   isHoverName,
}: mousePositionProp) => {
   console.log(isHoverName);
   var { x, y } = mousePosition;
   if (isHoverName) {
      return (
         <Cursor
            backgroundColor="rgba(207, 10, 82)"
            translateY={-50}
            x={x}
            y={y}
            id="cursor">
            <span
               style={{
                  position: "relative",
                  fontSize: "18px",
                  color: "white",
                  top: "-30px",
                  fontWeight: "700",
               }}>
               Click to move Github!
            </span>
         </Cursor>
      );
   } else if (currentStack) {
      return (
         <Cursor
            backgroundColor="white"
            translateY={-90}
            x={x}
            y={y}
            id="cursor">
            <span
               style={{
                  position: "relative",
                  fontSize: "22px",
                  color: "black",
                  fontWeight: "700",
               }}>
               {currentStack}
            </span>
         </Cursor>
      );
   } else {
      return (
         <Cursor
            backgroundColor="rgba(207, 10, 82)"
            translateY={-50}
            x={x}
            y={y}
            id="cursor"
         />
      );
   }
};

export default CursorComponent;
