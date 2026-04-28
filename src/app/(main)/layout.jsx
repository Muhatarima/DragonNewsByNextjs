import Navber from '@/components/shared/Navber'
import Header from '@/components/shared/Header'
import React, { Children } from 'react'
import BreakingNews from '@/components/shared/BreakingNews'

const MainLayout = ({children}) => {
  return (
   <>
   <Header></Header>
   <BreakingNews></BreakingNews>
   <Navber></Navber>

   
   {children}
   </>
  )
}

export default MainLayout