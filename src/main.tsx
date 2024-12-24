import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import './i18n'
import { ThemeProvider } from './hooks/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/my-resume/'>
      <Suspense fallback="...is loading">
        <ThemeProvider >
          <App />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
