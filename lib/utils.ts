import { Metadata } from 'next'

export function constructMetadata({
  title = 'Ryan Nguyen | Personal Portfolio',
  description = 'Ryan Nguyen is a full-stack developer experienced in Javascript, Typescript, React and Nextjs.',
  image = '/profilePic.jpg',
  icons = 'favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL('https://ryannguyen-portfolio.vercel.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
