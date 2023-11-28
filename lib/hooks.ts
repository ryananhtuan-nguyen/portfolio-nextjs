import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './data'

export function useSectionInView(
  sectionName: SectionName,
  threshold: number = 0.75
) {
  const { ref, inView } = useInView({
    threshold: threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref }
}
