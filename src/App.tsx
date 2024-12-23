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
        <Route path="/my-resume/home" element={<MainPage />} />
        <Route path="/my-resume/about" element={<AboutPage />} />
        <Route path="/my-resume/experience" element={<ExperiencePage />} />
        <Route path="/my-resume/portfolio" element={<PortfolioPage />} />
        <Route path="/my-resume/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  )
}
