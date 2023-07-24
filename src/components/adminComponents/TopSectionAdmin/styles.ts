import styled from "styled-components"
import { letterTitle2, letterParagraph, letterTitle1 } from "../../../styles/globalStyle"

export const StyledTopSectionAdmin = styled.section`
  width: 100%;
  min-height: 2rem;

  padding-bottom: 1.25rem;
 
  h2 {
    ${letterTitle2};
    margin-bottom: .4rem;
  }

  p {
    ${letterParagraph};
  }

  @media(max-width: 420px){
    h2 {
      font-size: 1.8rem;
      line-height: 1.5;
      font-weight: 600;
    }
  }
`