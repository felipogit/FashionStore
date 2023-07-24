import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './providers/ProductsContext/ProductsContex.tsx'
import { UserProvider } from './providers/UserContext/UserContext.tsx'
import { StyleSheetManager } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <UserProvider>
        <ProductsProvider>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== 'onlyBrand' && prop !== 'styleTypeButton' && prop !== 'styledDiv' && prop !== 'stylesModal'}>
            <App />
          </StyleSheetManager>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
