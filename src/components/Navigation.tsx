import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import LanguageChanger from './LanguageChanger'

export default function Navigation() {
  const { t } = useTranslation()
  // const classLink: string =
  //   'bg-white text-black py-2 px-4  rounded-lg  hover:cursor-pointer shadow-gray-200  transform-3d rotate-x-51 rotate-z-43 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl  active:bg-gray-100 '
  return (
    <aside className="z-40 fixed left-[20px] top-1/2  -translate-y-1/2  min-w-[--nav-width] border-l-4 border-[var(--main-color)]  px-5">
      <div className=" flex flex-col">
        <header className="text-3xl font-bold">123</header>
        <nav>
          <ul className="flex flex-col justify-center ">
            <Link to="/home">{t('navigation.home')}</Link>
            <Link to="/about">{t('navigation.about')}</Link>
            <Link to="/experience">{t('navigation.experience')}</Link>
            <Link to="/portfolio">{t('navigation.portfolio')}</Link>
            <Link to="/contacts">{t('navigation.contacts')}</Link>
          </ul>
        </nav>
        <LanguageChanger />{' '}
      </div>
    </aside>
  )
}
