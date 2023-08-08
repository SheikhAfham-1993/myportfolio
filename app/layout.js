import { Albert_Sans } from 'next/font/google'
import { classNames } from '@/lib/functions'
import '../styles/global.css'

import ThemeProviders from '@/components/Theme/ThemeProviders'
const albert = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to my portfolio',
  description: 'Developed by Afham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={classNames(albert.className, 'bg-gray-100 dark:bg-gray-800')}
      >
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
