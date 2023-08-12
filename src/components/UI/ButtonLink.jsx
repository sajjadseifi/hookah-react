import React from 'react'
import { Link } from "react-router-dom"

const buttonStyle = `
py-2
px-20
block
my-2
text-center
text-3xl
rounded-lg
duration-500
hover:scale-105
active:scale-95

shodow-lg
shodow-gray-100
bg-gray-300
text-gray-800
text-bold
`

export const ButtonLink = ({title,icon,to='/',css,...props}) => {
  return (
         <Link to={to} className={`${buttonStyle} ${css}`} {...props}>
            {icon &&  <span>{icon}</span>}
            <span>{title}</span>
         </Link>
  )
}
