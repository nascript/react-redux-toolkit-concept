import React from 'react'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import ShowProduct from './components/ShowProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<ShowProduct />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
