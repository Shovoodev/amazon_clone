import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { HomePage , Navbar , Checkout , SearchResult , ProductPage } from './components/index'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route  path='/Search' element={<SearchResult/>}/>
        <Route  path='/Product/:id' element={<ProductPage/>}/>
        <Route  path='/Checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
