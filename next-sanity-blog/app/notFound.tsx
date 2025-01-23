import React from 'react'
import Link from 'next/link'

export default function notFound() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
     <h1>Page not Found </h1> 
      <Link href='/contact'>Back to Home</Link>
    </div>
  )
}
