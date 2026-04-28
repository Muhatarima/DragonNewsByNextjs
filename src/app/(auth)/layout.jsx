import Navber from '@/components/shared/Navber'
import React, { Children } from 'react'



const AuthLayout = ({children}) => {
  return (
    <>
    <Navber></Navber>
    {children}
    </>
  )
}

export default AuthLayout 