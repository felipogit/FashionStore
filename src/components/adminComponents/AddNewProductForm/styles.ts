import styled from "styled-components"

export const StyledAddNewProductForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 10px;
 
  button {
    width: 17rem;
    height: 3.75rem;

    position: absolute;
    right: 1.25rem;
    bottom: 1.875rem;

    display:flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;

    img {
      width: 1.0625rem;
    }
  }
`