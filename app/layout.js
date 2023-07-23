import './globals.css'
import { Inter, Albert_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const albert = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to my portfolio',
  description: 'Developed by Afham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={albert.className}>{children}</body>
    </html>
  )
}
