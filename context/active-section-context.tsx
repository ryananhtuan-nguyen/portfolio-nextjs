'use client'

import { PropsWithChildren, ReactNode, createContext, useState } from 'react'

import type { SectionName } from '@/lib/data'

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
)

const ActiveSectionContextProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider
