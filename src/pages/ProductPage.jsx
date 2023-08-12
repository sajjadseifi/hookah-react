import React from 'react'
import { MenuLayout } from '../layouts/MenuLayout'
import { categories, products } from '../store/data'
import { useParams } from 'react-router-dom'
import Grid from '../components/Grid/Grid'
import { ProductCard } from '../components/Card/ProductCard'

const gridStlye = `
  xl:grid-cols-4 
  lg:grid-cols-3 
  md:grid-cols-2 
  sm:grid-cols-1
  xs:grid-cols-1
  grid-cols-1
`
export const ProductPage = () => {
  const { categoryId,menuId } = useParams()

  const category = categories.find((c)=>c.id== +categoryId)

  const productCategory = products.filter((p)=>p.categoryId == +categoryId)
  return (
    <MenuLayout backRoute={`/${menuId}`}>
      <div >
        <img className="w-100 h-100  rounded-xl shadow-lg mx-auto" src={category.icon} alt="Bonnie image"/>
        <h2 className="mt-5 text-center text-2xl  text-gray-100">منوی  {category.name} </h2> 
      </div>
      <Grid cssStyle={gridStlye} items={productCategory} renderComponent={ProductCard} />
    </MenuLayout>
  )
}
