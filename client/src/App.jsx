import {  Route,   Routes } from 'react-router-dom'
import Layout from "./components/Layout"

import ProductContainer from "./components/ProductContainer"

import CartContainer from "./components/CartContainer"
import ProductItemDetails from './components/ProductItemDetails'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Layout/>}>
    
      <Route index element={<ProductContainer />} />
      <Route path='/cart' element={<CartContainer />} />
      <Route path='/product/:id' element={<ProductItemDetails />} />
      <Route path='/login' element={<Login />} />

      <Route path='/register' element={<Register />} />


      </Route>
    </Routes>
  )
}

export default App
