import CardProject from './CardProject'

export default function CardsProjects() {
  return (
    <section className="grid grid-cols-1  sm:grid-cols-1 xl:grid-cols-[repeat(2,_1fr)] 3xl:grid-cols-[repeat(3,_1fr)]  flex-nowrap gap-8">
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </section>
  )
}
