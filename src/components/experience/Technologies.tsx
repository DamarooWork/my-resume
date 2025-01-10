import Technology from './Technology'
import react from '/Projects/React/my-resume/src/assets/icons/experiencePage/react.png'
import typescript from '/Projects/React/my-resume/src/assets/icons/experiencePage/typescript.png'
import reduxDark from '/Projects/React/my-resume/src/assets/icons/experiencePage/reduxDark.png'
import reduxLight from '/Projects/React/my-resume/src/assets/icons/experiencePage/reduxLight.png'
import vite from '/Projects/React/my-resume/src/assets/icons/experiencePage/vite.png'
import tailwind from '/Projects/React/my-resume/src/assets/icons/experiencePage/tailwind.png'
import rombo from '/Projects/React/my-resume/src/assets/icons/experiencePage/rombo.png'
import nodejs from '/Projects/React/my-resume/src/assets/icons/experiencePage/nodejs.png'
import js from '/Projects/React/my-resume/src/assets/icons/experiencePage/js.png'
import html from '/Projects/React/my-resume/src/assets/icons/experiencePage/html.png'
import css from '/Projects/React/my-resume/src/assets/icons/experiencePage/css.png'
import githubLight from '/Projects/React/my-resume/src/assets/icons/github/githubLight.png'
import githubDark from '/Projects/React/my-resume/src/assets/icons/github/githubDark.png'
import antd from '/Projects/React/my-resume/src/assets/icons/experiencePage/antd.png'
import { FadeInSection } from '../../hooks/FadeinSection'

const technologiesArray: ITechnology[] = [
  {
    title: 'React',
    img: {
      src: react,
      alt: 'react icon',
    },
    link: 'https://react.dev/',
  },
  {
    title: 'TypeScript',
    img: {
      src: typescript,
      alt: 'TypeScript icon',
    },
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Redux',
    img: {
      src: reduxDark,
      srcForTheme: reduxLight,
      alt: 'Redux icon',
    },
    link: 'https://redux.js.org/',
  },
  {
    title: 'Vite',
    img: {
      src: vite,
      alt: 'vite icon',
    },
    link: 'https://vite.dev/',
  },
  {
    title: 'Tailwind',
    img: {
      src: tailwind,
      alt: 'tailwind icon',
    },
    link: 'https://tailwindcss.com/',
  },
  {
    title: 'Rombo',
    img: {
      src: rombo,
      alt: 'Rombo icon',
    },
    link: 'https://rombo.co/tailwind/',
  },
  {
    title: 'NodeJS',
    img: {
      src: nodejs,
      alt: 'nodejs icon',
    },
    link: 'https://nodejs.org/en',
  },
  {
    title: 'Git',
    img: {
      src: githubDark,
      srcForTheme: githubLight,
      alt: 'Git icon',
    },
    link: 'https://git-scm.com/',
  },
  {
    title: 'Ant design',
    img: {
      src: antd,
      alt: 'antd icon',
    },
    link: 'https://ant.design/',
  },
  {
    title: 'JavaScript',
    img: {
      src: js,
      alt: 'js icon',
    },
    link: 'https://javascript.info/',
  },
  {
    title: 'HTML',
    img: {
      src: html,
      alt: 'html icon',
    },
    link: 'https://wikipedia.org/wiki/HTML',
  },
  {
    title: 'CSS',
    img: {
      src: css,
      alt: 'css icon',
    },
    link: 'https://wikipedia.org/wiki/CSS',
  },
]
export default function Technologies() {
  return (
    <div className="technologies grid grid-cols-1  sm:grid-cols-[repeat(2,_1fr)] xl:grid-cols-[repeat(3,_1fr)] 3xl:grid-cols-[repeat(3,_1fr)] 4xl:grid-cols-[repeat(4,_1fr)] flex-nowrap ">
      {technologiesArray.map((tech) => {
        return (
          <FadeInSection key={tech.title}>
            <Technology {...tech} />
          </FadeInSection>
        )
      })}
    </div>
  )
}
