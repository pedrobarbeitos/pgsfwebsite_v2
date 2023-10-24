import Link from 'next/link'
import React from 'react'
import './navbar.scss'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='navbar'>
        <div className='navbarLeft'>
            <Link href='/'>pgsfarchitects</Link>
        </div>
        <div className='navbarRight'>
            <Link href=''>work</Link>
            <Link href=''>studio</Link>
            <Link href=''>contact</Link>
        </div>
    </div>
  )
}

export default Navbar