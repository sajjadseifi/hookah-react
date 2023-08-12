import { Link } from "react-router-dom"
import { Card } from "./Card"
import { useParams } from 'react-router-dom'


export const CategoryCard = ({id:categoryId,icon,name,active}) => {
      const { menuId } = useParams()
   return      (
      <Link to={`/${menuId}/${categoryId}`}>
        <Card >
              <img className="w-5/6 aspect-square  rounded-full shadow-lg mx-auto" src={icon} alt="Bonnie image"/>
              <h2 className="mt-5 text-center text-2xl  text-gray-100">{name}</h2> 
        </Card>
      </Link>
      )
}