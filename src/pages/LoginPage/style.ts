import { styled } from "styled-components"
import { letterTitle2, imgCover } from "../../styles/globalStyle.ts"


export const StyledFormLogin = styled.form`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    
    > .container {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        margin: 1rem 0;
        flex-wrap: wrap;

        button{
            width: 45%;
            min-width: 130px;
            
            @media (max-width: 314px){
                width: 100%;
            }
        }
    }
`

export const LoginPageTitle = styled.h1`
    ${letterTitle2}
`

export const StyleSection = styled.section`
    display: flex;
    align-items: center;
    gap: 4rem;
    
    @media (max-width: 1200px){
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    img{
        ${imgCover}
    }
`
