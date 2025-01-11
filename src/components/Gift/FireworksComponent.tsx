import { Fireworks } from '@fireworks-js/react'
import { useRef } from 'react'
import type { FireworksHandlers } from '@fireworks-js/react'
import salut2 from '/Projects/React/my-resume/src/assets/sounds/salut2.mp3'
import salut3 from '/Projects/React/my-resume/src/assets/sounds/salut3.mp3'
import salut4 from '/Projects/React/my-resume/src/assets/sounds/salut4.mp3'
export default function FireworksComponent() {
  const ref = useRef<FireworksHandlers>(null)
  return (
    <>
      <Fireworks
        className="z-30"
        ref={ref}
        options={{
          opacity: 0.5,
          acceleration: 1,
          explosion: 5,
          particles: 50,
          mouse: {
            click: false,
            move: false,
            max: 10,
          },
          sound: {
            enabled: true,
            files: [salut2, salut3, salut4],
            volume: {
              min: 5,
              max: 15,
            },
          },
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      />
    </>
  )
}
