'use client'
import { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from 'next-themes'

type Theme = 'light' | 'dark'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    setIsMounted(true)
    const localTheme = window.localStorage.getItem('theme') as Theme | null

    if (localTheme) {
      setTheme(localTheme)
    } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark')
    }
  }, [setTheme])

  //hydration
  if (!isMounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
    >
      {theme === 'light' && <BsSun />}
      {theme === 'dark' && <BsMoon />}
    </button>
  )
}

export default ModeToggle
