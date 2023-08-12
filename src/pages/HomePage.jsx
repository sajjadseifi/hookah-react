import React from 'react'
import { ButtonLink } from '../components/UI/ButtonLink'
import { menus } from '../store/data'

export const HomePage = () => {
  return (
    <section className='px-10'>
      <div>
        <h2 className="mt-5 text-center text-5xl  text-gray-300">منوی کافه هوکاه</h2> 
        <ul className='flex flex-col items-center py-5'>
          {menus.map((m,idx)=>(
            <li className='flex-1 w-full md:w-1/2' key={idx}>
              <ButtonLink to={`/${m.id}/`} title={m.title}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
