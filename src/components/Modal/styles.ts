import styled, { css } from "styled-components"
import { letterPriceSmallBold, letterTitle3, letterPriceSmall } from "../../styles/globalStyle"

interface IStyledModalBox {
  stylesModal?: "shoppingCart" | "adminModal"
}


export const StyledModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);
`

export const StyledModalBox = styled.div<IStyledModalBox>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;

  header {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font: ${letterTitle3};

            > button {
              width: 2rem;
              height: 2rem;
              font-size: 35px;
              cursor: pointer;
              background-color: transparent;
            }
          }

  ${({ stylesModal }) => {
    switch (stylesModal) {
      case "shoppingCart":
        return css`
          height: 500px;
          max-width: 450px;
          position: absolute;
          top: 0px;
          right: 2px;
          align-items: start;
          padding: 10px 10px 0px 20px;
          border-radius: 3px;

          .totalPrice{
            ${letterPriceSmall}
            padding-bottom: 10px;
          }

          .totalPriceValue{
            ${letterPriceSmallBold}
          }
        `;

      case "adminModal":
        return css`

          header {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font: ${letterTitle3};
            padding-left:1.25rem;

            > button {
              width: 2rem;
              height: 2rem;
              font-size: 35px;
              cursor: pointer;
              margin-right:1.25rem;

              background-color: transparent;
            }
          }

          margin: 0 auto;
          height: 42.5rem;
          max-width: 37rem;
          border-radius: 4px;

          @media(max-width: 600px){
            width: 95%;
          }

          @media(max-width:420px){
            height: 50rem;;
            button {
              width: 85%;
            }
          }          
        `;
    }
  }}
`;
