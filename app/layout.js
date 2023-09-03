import { Albert_Sans } from 'next/font/google'
import { classNames } from '@/lib/functions'
import TopBar from '@/components/topBar/TopBar'
import MobileSideBar from '@/components/topBar/MobileBar'
import '../styles/global.css'
const albert = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to my portfolio',
  description: 'Developed by Afham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(albert.className, 'bg-gray-50')}>
        <main className="max-w-4xl flex h-fit items-center justify-center m-auto py-10 px-10 md:px-0">
          {children}
        </main>
      </body>
    </html>
  )
}
