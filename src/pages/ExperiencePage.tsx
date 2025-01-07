import HeaderExperience from '../components/experience/HeaderExperience'
import MainExperience from '../components/experience/MainExperience'

export default function ExperiencePage() {
  return (
    <section className="h-[100vh] box-border m-auto pt-12 max-w-[80%]">
      <HeaderExperience />
      <MainExperience />
    </section>
  )
}
