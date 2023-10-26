
import Link from 'next/link'
import './page.scss'
import Gallery from './components/Gallery/Gallery'
import CustomCursor from './components/Cursor/Cursor'

export default function Home() {
  return (
    <div className="containerMain">
      <CustomCursor/>
      <Gallery/> 
       
    </div>
  )
}
