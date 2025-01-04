export default function ProfExp() {
  return (
    <section className="relative flex flex-col">
      <hgroup className="mb-4">
        <h2 className="text-3xl font-semibold text-[var(--link-color)] dark:text-[var(--dark-link-color)] ">
          FrontEnd Developer
        </h2>
        <h3 className="text-2xl">Sensorium</h3>
      </hgroup>
      <p className="text-2xl">
        Я работал в Sensorium с такого-то по такое-то. Делал такое и такое
      </p>
      <p>Stack</p>
      <div className="flex flex-row justify-start">
        <span>vue</span>
        <span>vue</span>
        <span>vue</span>
        <span>vue</span>
        <span>vue</span>
        <span>vue</span>
      </div>
      <div className="absolute right-5 top-2 flex flex-row gap-5 justify-end items-center">
        <img src="" alt="calendar" />
        <time dateTime="2008-02-14 20:00">Январь 2021 -</time>
        <time dateTime="2009-02-14 20:00">Мая 2021</time>
      </div>
    </section>
  )
}
