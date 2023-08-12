import React from 'react'

export const Header = () => {

  return (
    <header className='py-10 bg-zinc-900'>
      <div className='mx-auto w-4/5 flex flex-col-reverse text-center sm:text-right sm:flex-row sm:justify-between items-center '>
        <div className='mt-8 sm:my-0'>
          <h1 className='text-5xl mb-8'>کافه هوکا</h1>
          <h2 className='text-5xl font-donor'>Hookah Coffee</h2>
        </div>
        <div>
          <img className='h-full rounded-full' src="/images/hookah-icon.jpeg" alt="کافه هوکاه" />
        </div>
      </div>
    </header>
  )
}
