import Navbar from './components/navbar/navbar'
import Link from 'next/link'
import './page.scss'
import Gallery from './components/Gallery/Gallery'

export default function Home() {
  return (
    <div className="containerMain">
      <Navbar/> 
      <Gallery/> 
      <Link href=''>client login</Link> 
    </div>
  )
}
