import { Albert_Sans } from 'next/font/google'
import { classNames } from '@/lib/functions'
import '../styles/global.css'
import TopBar from '@/components/topBar/TopBar'

const albert = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Hi, I am Afham',
  description: 'Developed by Afham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={classNames(albert.className, 'bg-gray-50')}
      >
        <main className="w-full flex flex-col h-fit items-start justify-start m-auto py-10 space-y-6 sm:space-y-4">
          <TopBar />
          {children}
        </main>
      </body>
    </html>
  )
}
