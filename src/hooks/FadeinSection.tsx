import { useEffect, useRef, useState } from 'react'

export function FadeInSection({ children }: ReactNode) {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef<HTMLElement>()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    if (domRef.current) {
      observer.observe(domRef.current)
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current)
      }
    }
  }, [])
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      // @ts-ignore
      ref={domRef}
    >
      {children}
    </div>
  )
}
