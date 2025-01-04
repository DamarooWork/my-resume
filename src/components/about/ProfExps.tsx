import { useTranslation } from 'react-i18next'
import ProfExp from './ProfExp'

export default function ProfExps() {
  const { t } = useTranslation()
   // @ts-ignore
  const profExps: IProfExp[] = t('aboutPage.profExps', {
    returnObjects: true,
  })
  return <div className='flex flex-col justify-start gap-3'>
   {profExps.map((profExp) => {
          return (
            <ProfExp
              key={profExp.date.start}
              linkJob={profExp.linkJob}
              position={profExp.position}
              job={profExp.job}
              description={profExp.description}
              date={profExp.date}
              stack={profExp.stack}
            />
          )
        })}
  </div>
}
