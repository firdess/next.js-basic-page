import Link from 'next/link'
import React from 'react'

export default function NavLink() {
  return (
    <div className='w-full justify-center flex gap-[40px] text-[24px] my-10 '>
      <Link className='hover:underline' href="/">Home</Link>
      <Link className='hover:underline'  href="/products">
        Products</Link>
      <Link className='hover:underline'  href="/about-us">About Us</Link>
    </div>
  )
}
