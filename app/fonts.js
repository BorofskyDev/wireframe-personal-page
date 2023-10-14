import { Playfair_Display, Roboto } from 'next/font/google'

export const bodyText = Roboto({ subsets: ['latin'], variable: '--body-text' })
export const titleText = Playfair_Display({
  subsets: ['latin'],
  variable: '--title-text',
})
