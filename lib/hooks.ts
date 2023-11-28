import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './data'

export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView()
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref }
}
