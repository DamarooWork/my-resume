import { Routes, Route } from 'react-router'
import MainPage from './pages/MainPage'
import Navigation from './components/Navigation'
import PortfolioPage from './pages/PortfolioPage'
import ContactsPage from './pages/ContactsPage'
import ExperiencePage from './pages/ExperiencePage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  )
}
