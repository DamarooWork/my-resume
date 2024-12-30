import { Fireworks } from '@fireworks-js/react'
import { useRef } from 'react'
import type { FireworksHandlers } from '@fireworks-js/react'

export default function Gift() {
  const ref = useRef<FireworksHandlers>(null)
  // const toggle = () => {
  //   if (!ref.current) return
  //   if (ref.current.isRunning) {
  //     ref.current.stop()
  //   } else {
  //     ref.current.start()
  //   }
  // }
  return (
    <>
      <Fireworks
        ref={ref}
        options={{
          opacity: 1,
          acceleration: 1,
          explosion: 10,
          particles: 200,
          mouse: {
            click: true,
            move: false,
            max: 10,
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
