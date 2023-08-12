import React from 'react'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <div className='bg-zinc-950 min-h-screen text-gray-100 font-mj'>
      <Header/>
      <section className='py-5'>
        {children}
      </section>
    </div>
  )
}
