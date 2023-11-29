import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { ThemeProvider } from '@/context/next-theme-provider'
import { Toaster } from 'sonner'
import ModeToggle from '@/components/ModeToggle'
import { constructMetadata } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relativ pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
        <ThemeProvider attribute="class" enableSystem>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" richColors />
            <Footer />
          </ActiveSectionContextProvider>
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
