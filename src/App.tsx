import { Routes, Route } from 'react-router'
import MainPage from './pages/MainPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactsPage from './pages/ContactsPage'
import ExperiencePage from './pages/ExperiencePage'
import AboutPage from './pages/AboutPage'
import AsideComponent from './components/aside/AsideComponent'
import GiftBox from './components/UI/GiftBox'

export default function App() {
  return (
    <>
      <AsideComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <GiftBox/>
    </>
  )
}
