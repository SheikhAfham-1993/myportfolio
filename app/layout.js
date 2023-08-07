import './globals.css'
import { Inter, Albert_Sans } from 'next/font/google'
import { classNames } from '@/lib/functions'
const inter = Inter({ subsets: ['latin'] })
const albert = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to my portfolio',
  description: 'Developed by Afham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(albert.className, 'bg-gray-100')}>
        {children}
      </body>
    </html>
  )
}
