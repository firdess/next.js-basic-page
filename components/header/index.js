import React from 'react'
import NavLink from '../navlink'

export default function Header() {
  return (
    <div className='mx-auto w-1/2 text-center'>
      <h1 className='text-[50px]'>
        Instrument Shop
      </h1>
      <NavLink/>
    </div>
  )
}
