import { Routes, Route } from 'react-router'
import MainPage from './pages/MainPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactsPage from './pages/ContactsPage'
import ExperiencePage from './pages/ExperiencePage'
import AboutPage from './pages/AboutPage'
import AsideComponent from './components/aside/AsideComponent'

export default function App() {
  
  return (
    <>
      <AsideComponent />
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
