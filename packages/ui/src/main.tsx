import { CssVarsProvider, StyledEngineProvider } from '@mui/joy/styles'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
