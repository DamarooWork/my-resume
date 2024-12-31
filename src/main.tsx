import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import './i18n'
import { ThemeProvider } from './hooks/ThemeContext.tsx'
import { ModalState } from './hooks/ModalContext'
import AppLoading from './components/UI/AppLoading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/my-resume/">
      <ThemeProvider>
        <Suspense fallback={<AppLoading />}>
          <ModalState>
            <App />
          </ModalState>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
