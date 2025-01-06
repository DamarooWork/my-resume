import Technology from './Technology'
import reactImg from '/Projects/React/my-resume/src/assets/icons/experiencePage/react.png'
import typescript from '/Projects/React/my-resume/src/assets/icons/experiencePage/typescript.png'
export default function Technologies() {
  return (
    <div className="grid grid-cols-[repeat(5,_1fr)]  gap-20 ">
      <Technology title="TypeScript" img={{ src: typescript, alt: 'ts' }} />
      <Technology title="React" img={{ src: reactImg, alt: 'react' }} />
    </div>
  )
}
