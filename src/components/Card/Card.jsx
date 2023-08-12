import React from 'react'
const cardStyle = `
cursor-pointer
text-center 

duration-300

py-5 
px-1 

rounded-lg 

bg-zinc-900 

shadow-2xl 
shadow-black/80 

hover:scale-105 
hover:shadow-xl 

active:scale-95 
active:shadow-lg 
`

export const Card = ({children,cssStyle,...props}) => {
  return (
    <div className={`${cardStyle}  ${cssStyle}`} {...props}>{children}</div>
  )
}
