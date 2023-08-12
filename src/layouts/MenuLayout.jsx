import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { Layout } from './Layout'

export const MenuLayout = ({children,backRoute ='/'}) => {
  return (
    <>
      <div className='p-10'>
          <Link to={backRoute} className='flex flex-start align-center'>
            <svg class="w-6 h-6 text-zinc-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
            </svg>
            <span  className='text-xl px-1'>بازگشت به منوی قبلی</span>
          </Link>
      </div>
      {children}
      {/* Footer */}
    </>
  )
}
