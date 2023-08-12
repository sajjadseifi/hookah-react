import React, { useEffect, useState } from 'react'
import Grid from '../components/Grid/Grid'
import { CategoryCard } from '../components/Card/CategoryCard'
import {  categories, menus } from '../store/data'
import { CategorySkeletonCard } from '../components/Card/CategorySkeletonCard'
import { MenuLayout } from '../layouts/MenuLayout'
import { useParams } from 'react-router-dom'

export const MenuPage = () => {
  const [loading,setLoading] = useState(false)
  const { menuId } = useParams()

  const menu = menus.find((m)=>m.id== +menuId)
  
  const cats = categories.filter((m)=>m.menuId == +menuId)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])

  return (
    <MenuLayout backRoute='/'>
      <div >
        {menu &&(
          <h2 className="mt-5 text-center text-5xl  text-gray-300">{menu.title}</h2> 
        )}
      </div>
      <Grid 
        loading={loading}
        items={cats} 
        renderComponent={CategoryCard} 
        skeleton={<CategorySkeletonCard/>}
        cssStyle='xs:grid-cols-2'
      />
    </MenuLayout>
  )
}
