import { styled } from "styled-components";
import { letterParagraph, letterPriceSmall, letterTitle4 } from "../../styles/globalStyle.ts";


export const LiStyled = styled.li`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .image{
        width: clamp(230px,68vw,332px);
        height: clamp(268px,68vw,383px);
        border-radius: 20px;
    }

    .container{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .name{
        ${letterTitle4}
    }

    .price{
        ${letterPriceSmall}
    }

    .containerButton{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }

    .containerButton > button {
        width: 60px;
        height: 60px;
    }

    .containerButton > button > img{
        width: 29.47px;
        height: 31.46px;
    }

    .containerButton > span{
        ${letterParagraph}
    }

`