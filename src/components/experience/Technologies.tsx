import Technology from './Technology'
import react from '/Projects/React/my-resume/src/assets/icons/experiencePage/react.png'
import typescript from '/Projects/React/my-resume/src/assets/icons/experiencePage/typescript.png'
import reduxDark from '/Projects/React/my-resume/src/assets/icons/experiencePage/reduxDark.png'
import vite from '/Projects/React/my-resume/src/assets/icons/experiencePage/vite.png'
import tailwind from '/Projects/React/my-resume/src/assets/icons/experiencePage/tailwind.png'
import nodejs from '/Projects/React/my-resume/src/assets/icons/experiencePage/nodejs.png'
import js from '/Projects/React/my-resume/src/assets/icons/experiencePage/js.png'
import html from '/Projects/React/my-resume/src/assets/icons/experiencePage/html.png'
import css from '/Projects/React/my-resume/src/assets/icons/experiencePage/css.png'
export default function Technologies() {
  return (
    <div className="technologies grid grid-cols-1 md:grid-cols-[repeat(2,_1fr)] xl:grid-cols-[repeat(3,_1fr)] 2xl:grid-cols-[repeat(4,_1fr)]  gap-20 ">
      <Technology title="React" img={{ src: react, alt: 'react' }} />
      <Technology title="typescript" img={{ src: typescript, alt: 'ts' }} />
      <Technology title="Redux" img={{ src: reduxDark, alt: 'Redux' }} />
      <Technology title="Vite" img={{ src: vite, alt: 'vite' }} />
      <Technology title="tailwind" img={{ src: tailwind, alt: 'tailwind' }} />
      <Technology title="NodeJS" img={{ src: nodejs, alt: 'nodejs' }} />
      <Technology title="javascript" img={{ src: js, alt: 'js' }} />
      <Technology title="HTML" img={{ src: html, alt: 'html' }} />
      <Technology title="CSS" img={{ src: css, alt: 'css' }} />
    </div>
  )
}
