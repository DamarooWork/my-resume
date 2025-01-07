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
import FireworksComponent from './components/gift/Fireworks'
import ModalGift from './components/gift/ModalGift'
import { useTranslation } from 'react-i18next'
import ScrollButton from './components/UI/ScrollButton'
import ScrollToTop from './components/UI/ScrollToTop'
export default function App() {
  const { t } = useTranslation()
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext)

  return (
    <>
      <AsideComponent />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
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
