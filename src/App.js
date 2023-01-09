import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
import Home from './components/home/Home';
import Product from './components/productDetail/Product';
import Products from './components/products/Products';
import Cart from './components/cart/Cart'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SingleProduct from './components/singleProduct/SingleProduct';



const App = () => {

  const URL = `https://api.pujakaitem.com/api/products`

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const { data } = await axios.get(`${URL}`);
    await dispatch({ type: 'setproducts', payload: data });
    dispatch({ type: 'setPriceRange' })
  }

  console.log('app')

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/singleproduct/:id' element={<SingleProduct />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
