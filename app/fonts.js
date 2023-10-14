import { Playfair_Display, Roboto } from 'next/font/google'

export const bodyText = Roboto({
  subsets: ['latin'],
  variable: '--body-text',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
})
export const titleText = Playfair_Display({
  subsets: ['latin'],
  variable: '--title-text',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})
