import React from 'react'

const gridStyle = `
w-full
md:w-fit 

mx-auto 
grid  

xl:grid-cols-5 
lg:grid-cols-4 
md:grid-cols-3 
sm:grid-cols-2 
grid-cols-1 

gap-3 
sm:gap-6 

lg:p-10
sm:p-10
p-5

`
const Grid = ({
   items=[],
   renderComponent = (props)=><></>,
   skeleton = <></>,
   skeletonCount = 5,
   cssStyle = '',
   loading = false,
   
}) => {

   return (
      <div className={`${gridStyle}  ${cssStyle}`}>
         {loading && ([...Array(skeletonCount)].map((_,idx)=><div  key={idx}>{skeleton}</div>))}
         {!loading && items.map((data,idx)=>(
            <div key={idx}>
               {renderComponent(data)}
            </div>
         ))}
      </div>
   )
}

export default Grid 