import HeaderAbout from '../components/about/HeaderAbout'
import MainAbout from '../components/about/MainAbout'

export default function AboutPage() {
  return (
    <section className="min-h-[100vh] box-border m-auto py-10 max-w-[80%]">
      <HeaderAbout />
      <MainAbout />
    </section>
  )
}
