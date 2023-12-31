import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsContainer from "./components/ProductsContainer"
import NavBar from "./components/NavBar"
import ProductDetailContainer from './components/ProductDetailContainer'
import HomeContainer from './components/HomeContainer'

const App = () => {
  const messageGreeting = "Bienvenidos"

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer greeting={messageGreeting} />} />
        <Route path='products' element={<ProductsContainer />} />
        <Route path='category/:categoryId' element={<ProductsContainer />} />
        <Route path='details/:productId' element={<ProductDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
