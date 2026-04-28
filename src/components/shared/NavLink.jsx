'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href , className , children}) => {
  return (
    const pathname = usePathname();
    const isActive= href===pathname;
    <div>
<Link href={href} className={`${isActive ? "text-black":" text-gray-600"}`} >
 {children}
 </Link>

    </div>
  )
}

export default NavLink