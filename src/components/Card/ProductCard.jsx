import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from './Card'

const priceStyle = `
p-0
md:p-3 
text-left
text-lime-400 
bg-lime-0 

md:text-center 
md:text-lime-100 
md:bg-lime-700 

rounded-b-lg 
text-2xl 
text-bold
`

export const ProductCard = ({
   id,
   name,
   description,
   image,
   price
}) => {
   const [open,setOpen] = useState(false);

   const onOpenImage = ()=> setOpen(true)
   const onCloseImage = ()=> setOpen(false)
   
   return (
      <>
        <Card onClick={onOpenImage} cssStyle="px-3 py-3 md:p-0">
            <div className='flex flex-col md:flex-row items-start text-right  md:flex-col sm:text-center'>
               <div className='w-full  flex flex-reverse  md:flex-inherit  justify-between items-center'>
                     <div className='block md:hidden flex-1'>
                        <h2 className="mt-3 mx-5  text-2xl  text-gray-100  text-right md:text-center">{name}</h2> 
                     </div>
                        <img className="w-20 xs:w-30  rounded-xl md:w-full sm:rounded-t-xl aspect-square   shadow-lg mx-auto" 
                           src={image} 
                           alt={name}
                        />
               </div>
               <div className='flex-1 w-full'>
                     <div className='hidden md:block'>
                        <h2 className="mt-3 mx-5  text-4xl  text-gray-100  text-right md:text-center">{name}</h2> 
                     </div>
                     <div>
                        <p className='p-5 text-lg text-gray-400  text-right md:text-center'>{description}</p>
                        <div className={priceStyle}>{price}</div>
                     </div>
               </div>
            </div>
        </Card>
      <div className={`
      ${open ? 'opacity-100 visible':'opacity-0 invisible'} 
         fixed 
         inset-0 
         flex 
         flex-col 
         items-center 
         justify-center
         duration-500  
      `}>
               <div onClick={onCloseImage} className='z-0 absolute  top-0 left-0 w-full h-full bg-gray-900 opacity-50'></div>
               <div className='relative z-5 w-full sm:w-4/5 px-10'>
                  <img className="w-full h-auto sm:w-50  rounded-lg shadow-lg" 
                     src={image} 
                     alt={name}
                     />
                  <div onClick={onCloseImage} 
                  className={`
                     my-2 
                     py-3 
                     text-center  
                     bg-red-600 
                     rounded 
                     cursor-pointer
                     text-lg
                     sm:text-2xl 
                     duration-500
                     hover:scale-105
                     active:scale-95
                  `}>بستن تصویر</div>
               </div>
      </div>
      </>
   )
}
