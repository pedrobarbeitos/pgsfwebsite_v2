import Navbar from './components/navbar/navbar'
import Link from 'next/link'
import './page.scss'
import Gallery from './components/Gallery/Gallery'
import CustomCursor from './components/Cursor/Cursor'

export default function Home() {
  return (
    <div className="containerMain">
      <CustomCursor/>
      <Navbar/> 
      <Gallery/> 
      <Link href=''>copyright © 2024 all rights reserved</Link> 
    </div>
  )
}
