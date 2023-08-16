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
      <body className={classNames(albert.className, 'bg-gray-800')}>
        <div className="w-full bg-gray-900 h-[50px] sticky top-0 shadow-lg shadow-transparent px-5 text-white flex items-center z-50">
          <div className="w-full flex-1 justify-start space-x-4 hidden lg:flex">
            <TopBar />
          </div>
          <div className="w-full flex-1 justify-start space-x-4 flex lg:hidden">
            <MobileSideBar />
          </div>
        </div>
        <main className="flex h-fit items-center justify-center m-auto py-5">
          {children}
        </main>
      </body>
    </html>
  )
}
