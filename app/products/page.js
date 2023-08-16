'use client'
import React, { useState } from 'react'
import data from '../../data'

export default function ProductsPage() {
  const [products, setProducts] = useState(data)
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {
        products.map(item => {
          return <div key={item.id} className="flex flex-col w-[400px] items-center justify-center">
            <img className='w-[300px] rounded-md h-[400px] object-cover' src={item.img} />
            <div className='flex gap-6 items-center pt-[20px] '>
              <h3  >{item.title}</h3>
              <p className=' font-medium text-[24px]'> ${item.price}</p>
            </div>

          </div>
        })
      }
    </div>
  )
}
