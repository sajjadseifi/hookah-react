import React from 'react'
import { Card } from './Card'

export const CategorySkeletonCard = () => {
  return (
   <Card cssStyle='px-5 opacity-30'>
      <div role="status" class="animate-pulse">
         <div role="status" class="flex items-center justify-center w-full aspect-square  bg-gray-700 rounded-full animate-pulse ">
         </div>
         <div class="mt-5 h-5 mx-auto  bg-gray-700 rounded-full  w-[200px]  xs:w-[130px]  tx:w-[160px] sm:w-[210px]  md:w-[180px] "></div>
      </div>
   </Card>    
  )
}
