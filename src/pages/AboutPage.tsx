import HeaderAbout from '../components/about/HeaderAbout'
import MainAbout from '../components/about/MainAbout'

export default function AboutPage() {
  return (
    <section className="h-[100vh] box-border m-auto py-20 max-w-[80%]">
      <HeaderAbout/>
      <MainAbout/>
    </section>
  )
}
