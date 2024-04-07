import Footer from '@/components/view/Footer'
import Header from '@/components/view/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const OutletView = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default OutletView