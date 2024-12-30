import { Routes, Route } from 'react-router'
import MainPage from './pages/MainPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactsPage from './pages/ContactsPage'
import ExperiencePage from './pages/ExperiencePage'
import AboutPage from './pages/AboutPage'
import AsideComponent from './components/aside/AsideComponent'

import GiftBox from './components/UI/GiftBox'
import { useContext } from 'react'
import { ModalContext } from './hooks/ModalContext'
import Gift from './components/Gift/Gift'
import Modal from './components/UI/Modal'
import { useTranslation } from 'react-i18next'
export default function App() {
  const { t } = useTranslation()
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext)

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
      <GiftBox click={() => openModal()} />
      {modal && (
        <Modal onClose={() => closeModal()} title={t('gift.title')}>
          <Gift onClose={() => closeModal()}/>
        </Modal>
      )}
    </>
  )
}
