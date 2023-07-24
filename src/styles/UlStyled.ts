import { styled, css } from "styled-components"
import { letterParagraph, letterPriceSmallBold } from "./globalStyle"

interface IStyledProductList {
  styledDiv: "otherPage" | "adminPage";
}

export const StyledProductList = styled.ul<IStyledProductList>`

    width: 100%;
    height: 3.75rem;

    ${({ styledDiv }) => {
    switch (styledDiv) {
      case "otherPage":
        return css`
                    display: flex;
                    flex-direction: row;
                    align-items: start;
                    height:auto;
                    width: 100%;
                    max-width: 1440px;
                    overflow-x: auto;   
                    gap: 15px;
                    padding: 10px 0px;
                `;
      case "adminPage":
        return css`
              width: 100%;
              height: auto;
              display: flex;
              align-items: center;
              justify-content: space-around;
              gap: 1.8rem;
              flex-wrap: wrap;

              button {
                cursor: pointer;
                background-color: transparent;
              }
        
              li {
                width: 47%;

                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;

                list-style: none;

                /* background-color: red; */

                img {
                    width: 11rem;
                    height: 13rem;

                    margin-right: 1.25rem;
                  }

                div:first-child {
                  width: 360px;
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;


                  /* background-color: yellow; */
    
                  p:nth-child(1) {
                    font: ${letterParagraph}; 
                    width: 150px;
                    margin-bottom: 1.25rem;

                    text-align: center;
                    flex-wrap: wrap;

                    /* background-color: green; */
                  }

                  p:nth-child(2){
                    font: ${letterPriceSmallBold};
                    text-align: center;

                  }
                }

                div:nth-child(2) {
                  width: 130px;

                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  gap: 1rem;

                  margin-left: 1rem;
                  
                  .buttonIcon {
                    width: 2.2rem;
                    height: 2.2rem;
                  }
                }
              }
    
              @media(max-width: 780px) {
                li {
                  width: 100%;
                  justify-content: center;

                  div:first-child {
                    justify-content: center;

                    margin-bottom: 10px;
                  }
                }
              }

              @media(max-width: 1101px){
                li {
                  justify-content: center;
                }
              }
            `;
    }
  }}
    `