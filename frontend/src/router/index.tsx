import { Toaster } from '@/components/ui/toaster'
import { Route, Routes } from 'react-router-dom'

import Categories from '@/components/view/Categories'
import LayoutAdmin from '@/pages/(dashboard)/layout'
import ProductManagement from '@/pages/(dashboard)/product/page'
import Signin from '@/pages/login/signin'
import Cart from '@/pages/user/Cart'
import CategoryDetail from '@/pages/user/DetailCategory'
import DetailProduct from '@/pages/user/DetailProduct'
import Order from '@/pages/user/Order'
import ShopSP from '@/pages/user/Shop'
import OutletView from '@/viewWedsite/OutletView'
import Home from '@/pages/user/Home'
import ProductAddPage from '@/pages/(dashboard)/product/_components/add'
import ProductEditPage from '@/pages/(dashboard)/product/_components/edit'


function Router() {

  return (
    <>
      <Routes>

      <Route path='/' element={<OutletView />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<ShopSP />} />
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/detailcategory/:id' element={<CategoryDetail/>}/>
          <Route path='products/:id' element={<DetailProduct />} />
          <Route path='signin' element={<Signin/>}/>
          <Route path='carts' element={<Cart/>}/>
          <Route path='order' element={<Order/>}/>
        </Route>

        <Route path='admin' element={<LayoutAdmin />} >
          <Route path='products' element={<ProductManagement/>}/>
          <Route path='products/:id/edit' element={<ProductEditPage />} />
          <Route path='products/add' element={<ProductAddPage />} />
        </Route>

      </Routes>
      <Toaster/>

    </>
  )
}

export default Router
