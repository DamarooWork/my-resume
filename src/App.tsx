import { Routes, Route } from 'react-router'
import MainPage from './pages/MainPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactsPage from './pages/ContactsPage'
import ExperiencePage from './pages/ExperiencePage'
import AboutPage from './pages/AboutPage'
import AsideComponent from './components/aside/AsideComponent'
import GiftBox from './components/gift/GiftBox'
import { useContext } from 'react'
import { ModalContext } from './hooks/ModalContext'
import FireworksComponent from './components/gift/FireworksComponent'
import ModalGift from './components/gift/ModalGift'
import { useTranslation } from 'react-i18next'
import ScrollButton from './components/UI/ScrollButton'
import ScrollToTop from './components/UI/ScrollToTop'
import ProjectPage from './pages/ProjectPage'
import Page404 from './pages/Page404'
export default function App() {
 
  const { t } = useTranslation()
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext)

  return (
    <>
      <AsideComponent />
      <ScrollToTop />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="portfolio">
          <Route index element={<PortfolioPage />} />
          <Route path=":portfolioName" element={<ProjectPage />} />
        </Route>
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <GiftBox click={() => openModal()} />
      {modal && (
        <ModalGift onClose={() => closeModal()} title={t('gift.title')}>
          <FireworksComponent />
        </ModalGift>
      )}
      <ScrollButton />
    </>
  )
}
