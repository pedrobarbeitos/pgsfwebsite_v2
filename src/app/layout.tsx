import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/styles.sass'
import Navbar from './components/navbar/navbar'
import CustomCursor from './components/Cursor/Cursor'


const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700','900'] 
})

export const metadata: Metadata = {
  title: 'PGSF',
  description: 'London based architecture practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        <div className="layoutContainer">
          <CustomCursor/>
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  )
}
