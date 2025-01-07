import Technology from './Technology'
import react from '/Projects/React/my-resume/src/assets/icons/experiencePage/react.png'
import typescript from '/Projects/React/my-resume/src/assets/icons/experiencePage/typescript.png'
import reduxDark from '/Projects/React/my-resume/src/assets/icons/experiencePage/reduxDark.png'
import reduxLight from '/Projects/React/my-resume/src/assets/icons/experiencePage/reduxLight.png'
import vite from '/Projects/React/my-resume/src/assets/icons/experiencePage/vite.png'
import tailwind from '/Projects/React/my-resume/src/assets/icons/experiencePage/tailwind.png'
import nodejs from '/Projects/React/my-resume/src/assets/icons/experiencePage/nodejs.png'
import js from '/Projects/React/my-resume/src/assets/icons/experiencePage/js.png'
import html from '/Projects/React/my-resume/src/assets/icons/experiencePage/html.png'
import css from '/Projects/React/my-resume/src/assets/icons/experiencePage/css.png'
import githubLight from '/Projects/React/my-resume/src/assets/icons/github/githubLight.png'
import githubDark from '/Projects/React/my-resume/src/assets/icons/github/githubDark.png'
import { FadeInSection } from '../../hooks/FadeinSection'

const technologiesArray: ITechnology[] = [
  {
    title: 'React',
    img: {
      src: react,
      alt: 'react icon',
    },
  },
  {
    title: 'TypeScript',
    img: {
      src: typescript,
      alt: 'TypeScript icon',
    },
  },
  {
    title: 'Redux',
    img: {
      src: reduxDark,
      srcForTheme: reduxLight,
      alt: 'Redux icon',
    },
  },
  {
    title: 'Vite',
    img: {
      src: vite,
      alt: 'vite icon',
    },
  },
  {
    title: 'Tailwind',
    img: {
      src: tailwind,
      alt: 'tailwind icon',
    },
  },
  {
    title: 'NodeJS',
    img: {
      src: nodejs,
      alt: 'nodejs icon',
    },
  },
  {
    title: 'Git',
    img: {
      src: githubDark,
      srcForTheme: githubLight,
      alt: 'Git icon',
    },
  },
  {
    title: 'JavaScript',
    img: {
      src: js,
      alt: 'js icon',
    },
  },
  {
    title: 'HTML',
    img: {
      src: html,
      alt: 'html icon',
    },
  },
  {
    title: 'CSS',
    img: {
      src: css,
      alt: 'css icon',
    },
  },
]
export default function Technologies() {
  return (
    <div className="technologies grid grid-cols-1  sm:grid-cols-[repeat(2,_1fr)] xl:grid-cols-[repeat(3,_1fr)] 3xl:grid-cols-[repeat(4,_1fr)] flex-nowrap ">
      {technologiesArray.map((tech) => {
        return (
          <FadeInSection>
            <Technology key={tech.title} {...tech} />
          </FadeInSection>
        )
      })}
    </div>
  )
}
