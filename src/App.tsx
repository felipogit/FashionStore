import { ThemeProvider } from "styled-components"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle"
import { ResetStyle } from "./styles/reset"
import { useState } from "react"
import { defaultTheme, themeDark } from './styles/theme.ts';

export const App = () => {

  const [colorMode, setColorMode] = useState("light");
  
   return (
    <>
      <ThemeProvider theme={colorMode === "light" ? defaultTheme : themeDark}>
        <GlobalStyle />
        <ResetStyle />
        <RoutesMain />
      </ThemeProvider>
    </>
  )
}