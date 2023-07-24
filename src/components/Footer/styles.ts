import { styled } from "styled-components";
import { letterParagraph } from "../../styles/globalStyle.ts";


export const FooterStyled = styled.footer`
    align-self: flex-end;
    width: 100%;
    min-height: 120px;
    height: auto;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;

    p{
        padding: 10px;
        text-align: center;
        ${letterParagraph}
    }
`