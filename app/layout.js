import { Albert_Sans } from 'next/font/google'
import { classNames } from '@/lib/functions'
import '../styles/global.css'
import TopBar from '@/components/topBar/TopBar'
import Footer from '@/components/Footer/Footer'

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
        className={classNames(
          albert.className,
          'relative bg-background bg-fixed h-full'
        )}
      >
        {/* <TopBar /> */}
        <main className="w-full flex flex-row justify-center">
          <div className=" flex flex-col items-center justify-center align-middle">
            <div className="w-full lg:max-w-3xl 2xl:max-w-4xl px-5 md:px-10 py-10 md:py-0">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
