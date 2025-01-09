import HeaderProject from '../components/project/HeaderProject'
import MainProject from '../components/project/MainProject'

export default function ProjectPage() {
  return (
    <section className="h-[100vh] box-border m-auto py-20 max-w-[60%]">
      <HeaderProject />
      <MainProject />
    </section>
  )
}
