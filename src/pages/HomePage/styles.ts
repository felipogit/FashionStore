import { styled } from "styled-components"
import { imgCover, letterPriceSmall, letterTitle1, letterTitle2 } from "../../styles/globalStyle.ts"

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 25px;
    margin-top: 25px;
    max-width: 1440px;

    .containerHome{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: clamp(15px, 1.5vw,50px);
        align-items: center;
        justify-content: start;
        width: 100%;
        margin-bottom: 50px;
    }

    .containerHome > div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 25px;
        align-items: start;

        button{
            min-height: 60px;
            max-width: 272px;
            ${letterPriceSmall}
        }
    }

    .imgCover{
        ${imgCover}
    }

    .title{
        ${letterTitle1};
        word-break: keep-all;
    }

    h2{
        ${letterTitle2}
    }

    @media (max-width: 1243px){

        .containerHome{
            justify-content: center;
        }

        .containerHome > div{
            justify-content: start;
        }
    }
`