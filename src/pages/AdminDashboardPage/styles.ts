import styled from "styled-components"

export const StyledTopSectionContainer =styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  max-width: 1440px;

  padding: 0 35px;
  margin-bottom: 30px;
  
  button {
    width: 18rem;
    height: 3.75rem;

    padding: 5px;
    margin: 10px 0 0 10px;

    display:flex;
    align-items: center;
    justify-content: center;
    gap: .3125rem;
    
    img {
      width: 1.0625rem;
    }
  }

  @media(max-width: 400px) {
  
    padding: 0 5px;
    text-align: center;
    flex-wrap: wrap;

    button {
      margin: 0 auto;
      align-self: center;
    }
  }
`