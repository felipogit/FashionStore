import { styled } from "styled-components"

export const InputStyled = styled.input`
    background-color: ${({ theme }) => theme.colors.grey};
    color: grey;
    padding: 15px;
    width: 100%;
    height: 78px;
    border: 1px solid ${({ theme }) => theme.colors.grey};

    &::placeholder{
        color: grey;
    }

     &:hover, &:focus{
        border: 1px solid grey;
        outline: none;
    }
`
