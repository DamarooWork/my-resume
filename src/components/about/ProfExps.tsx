import { useTranslation } from 'react-i18next'
import ProfExp from './ProfExp'
import { FadeInSection } from '../../hooks/FadeinSection'

export default function ProfExps() {
  const { t } = useTranslation()
  // @ts-ignore
  const profExps: IProfExp[] = t('aboutPage.profExps', {
    returnObjects: true,
  })
  return (
    <div className="flex flex-col justify-start gap-10">
      {profExps.map((profExp) => {
        return (
          <FadeInSection key={profExp.date.start}>
            <ProfExp
              linkJob={profExp.linkJob}
              position={profExp.position}
              job={profExp.job}
              description={profExp.description}
              date={profExp.date}
              stack={profExp.stack}
            />
          </FadeInSection>
        )
      })}
    </div>
  )
}
