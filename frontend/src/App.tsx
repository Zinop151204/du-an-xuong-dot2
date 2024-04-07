import { Toaster } from '@/components/ui/toaster'
import { Route, Routes } from 'react-router-dom'
import Categories from './components/view/Categories'
import CategoryDetail from './pages/user/DetailCategory'
import DetailProduct from './pages/user/DetailProduct'
import Home from './pages/user/Home'
import ShopSP from './pages/user/Shop'
import OutletAdmin from './viewWedsite/OutletAdmin'
import OutletView from './viewWedsite/OutletView'
import Signin from './pages/login/signin'
import Cart from './pages/user/Cart'
import ProductManagement from './pages/(dashboard)/_components'
import ProductEditPage from './pages/(dashboard)/_components/edit'
import ProductAddPage from './pages/(dashboard)/_components/add'
import List from './pages/(dashboard)/_components/list'
import Order from './pages/user/Order'

function App() {

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

        <Route path='admin' element={<OutletAdmin />} >
          <Route index element={<List/>}/>
          <Route path='products/:id/edit' element={<ProductEditPage />} />
          <Route path='products/add' element={<ProductAddPage />} />
        </Route>

      </Routes>
      <Toaster/>

    </>
  )
}

export default App
