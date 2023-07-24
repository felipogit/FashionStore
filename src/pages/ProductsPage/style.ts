import { styled } from "styled-components";
import { letterTitle2, letterMenu, letterPriceSmall, letterParagraph, letterPriceBig, letterTitle3 } from "../../styles/globalStyle";

export const MainStyled = styled.main`
    h2{
        ${letterTitle2}
        margin-bottom: 20px;
    }
`

export const ProductMainStyled = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 35px;
padding-bottom: 30px; 
margin-bottom: 170px;

@media(max-width:800px){
    margin-bottom: 25px;

    .ProductContainer{
        flex-direction: column;
        align-items: center;
    }
}

.button{
    ${letterMenu};
    margin-right: 5px;
}

h3{
    ${letterPriceSmall}
}

.HomeProduct{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    height: 40px;
}

.ProductContainer{
    display: flex;
    align-items: center;
    gap: 60px;

    div{
        width: 100%;
        min-width: 200px;
        max-width: 480px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 14px;
}

    button{
        width: 226px;
        height: 55px ;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 23px;
    }

    h4{
        ${letterTitle3}
    }

    span{
        ${letterPriceBig}
    }
    p{
        ${letterParagraph}  
    }
    
}

.ProductMain{
    height: clamp(280px, 80vw, 500px);

    
}


`