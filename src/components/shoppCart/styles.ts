import { styled } from "styled-components";
import { letterPriceSmall, letterTitle4 } from "../../styles/globalStyle.ts";


export const UlStyled = styled.ul`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    gap: 30px;
    
    li{
        width: 100%;
        min-height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding-right: 10px;
    }

    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        flex-wrap: nowrap;
        gap: 15px;
        width: 100%;
    }

    .container > div{
        height: 100%;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
    
    .image{
        width: 80px;
        height: 80px;
        border-radius: 10px;
    }

    .price{
        ${letterPriceSmall}
    }

    .name{
        ${letterTitle4};
    }

    button{
        background-color: ${({ theme }) => theme.colors.white};
        width: 10px;
        height: 10px;
        font-size: 50px;
    }
`