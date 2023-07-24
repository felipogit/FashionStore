import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{

    //TITLE 1
    --fontTitle1: 'Oswald', sans-serif;

    --title1Weight: 500; 
    --title1Size: 6.25rem;
    --title1LineHeight: 7.5rem;

    --title1MobileSize: 3.125rem;
    --title1MobileLineHeight: 5.5575rem;

    //TITLE 2
    --fontTitle2: 'Oswald', sans-serif;

    --title2Weight: 500; 
    --title2Size: 3.75rem;
    --title2LineHeight: 5.5575rem;

    --title2MobileSize: 2.125rem;
    --title2MobileLineHeight: 4.0756rem;

    //TITLE 3
    --fontTitle3: 'Oswald', sans-serif;

    --title3Weight: 500; 
    --title3Size: 2rem;
    --title3LineHeight: 2.9638rem;

    //TITLE 4
    --fontTitle4: 'Roboto', sans-serif;
    
    --title4Weight: 700; 
    --title4Size: 1.1875rem;
    --title4LineHeight: 1.3919rem;

    //PRICE
    --fontPrice: 'Oswald', sans-serif;

    --smallPriceWeight: 400; 
    --smallPriceSize: 1.125rem;
    --smallPriceLineHeight: 1.6675rem;

    --smallPriceBoldWeight: 700; 
    --smallPriceBoldSize: 1.125rem;
    --smallPriceBoldLineHeight: 1.6675rem;

    --bigPriceWeight: 400; 
    --bigPriceSize: 2rem;
    --bigPriceLineHeight: 2.9375rem;

    --bigPriceBoldWeight: 700; 
    --bigPriceBoldSize: 2rem;
    --bigPriceBoldLineHeight: 2.9375rem;

    //MENU
    --fontMenu: 'Oswald', sans-serif;

    --menuWeight: 500; 
    --menuSize: 1.25rem;
    --menuLineHeight: 1.8125rem;

    //PARAGRAPH
    --fontParagraph: 'Roboto', sans-serif;

    --paragraphWeight: 400; 
    --paragraphSize: 1.25rem;
    --paragraphLineHeight: 2rem;

}
`

export const letterTitle1 = css`
    font-weight: var(--title1Weight);
    font-size: clamp(var(--title1MobileSize),13vw,var(--title1Size));
    line-height: clamp(var(--title1MobileLineHeight),13vw,var(--title1LineHeight));
    font-family: var(--fontTitle1);
`

export const letterTitle2 = css`
    font-weight: var(--title2Weight);
    font-size: clamp(var(--title2MobileSize),9.5vw,var(--title2Size));
    line-height: clamp(var(--title2MobileLineHeight),9.5vw,var(--title2LineHeight));
    font-family: var(--fontTitle2);
`

export const letterTitle3 = css`
    font-weight: var(--title3Weight);
    font-size: var(--title3Size);
    line-height: var(--title3LineHeight);
    font-family: var(--fontTitle3);
`

export const letterTitle4 = css`
    font-weight: var(--title4Weight);
    font-size: var(--title4Size);
    line-height: var(--title4LineHeight);
    font-family: var(--fontTitle4);
`

export const letterPriceSmall = css`
    font-weight: var(--smallPriceWeight);
    font-size: var(--smallPriceSize);
    line-height: var(--smallPriceLineHeight);
    font-family: var(--fontPrice);
`

export const letterPriceSmallBold = css`
    font-weight: var(--smallPriceBoldWeight);
    font-size: var(--smallPriceBoldSize);
    line-height: var(--smallPriceBoldLineHeight);
    font-family: var(--fontPrice);
`

export const letterPriceBig = css`
    font-weight: var(--bigPriceWeight);
    font-size: var(--bigPriceSize);
    line-height: var(--bigPriceLineHeight);
    font-family: var(--fontPrice);
`

export const letterPriceBigBold = css`
    font-weight: var(--bigPriceBoldWeight);
    font-size: var(--bigPriceBoldSize);
    line-height: var(--bigPriceBoldLineHeight);
    font-family: var(--fontPrice);
`

export const letterMenu = css`
    font-weight: var(--menuWeight);
    font-size: var(--menuSize);
    line-height: var(--menuLineHeight);
    font-family: var(--fontMenu);
`

export const letterParagraph = css`
    font-weight: var(--paragraphWeight);
    font-size: clamp(1rem, 5vw, var(--paragraphSize));
    line-height: var(--paragraphLineHeight);
    font-family: var(--fontParagraph);
`

export const imgCover = css`
    width: clamp(200px,80vw,750px);
`