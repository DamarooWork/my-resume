import CardsProjects from './CardsProjects'

export default function MainPortfolio() {
  return (
    <main className="">
      <section className="flex flex-col justify-start items-center text-center mb-16">
        <h2 className="text-5xl mb-8">
          Projects that made me proud and my clients happy
        </h2>
        <p className="text-3xl">
          As a fullstack engineer, I've brought ideas to life through custom web
          applications and responsive websites. My projects have ranged from
          e-commerce platforms to portfolio sites for small businesses. With a
          focus on clean code and user-centric design, I've helped clients
          increase their online presence and streamline their operations.
        </p>
      </section>
      <CardsProjects />
    </main>
  )
}
