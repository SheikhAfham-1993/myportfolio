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
          'bg-gray-50 relative bg-background bg-fixed h-full'
        )}
      >
        {/* <TopBar /> */}
        <main className="w-full flex flex-row justify-center">
          <div className=" flex flex-col items-center justify-center align-middle">
            <div className="max-w-full md:max-w-5xl">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
